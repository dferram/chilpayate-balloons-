import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory quotes storage (can be connected to MongoDB, PostgreSQL, or Google Sheets)
const quotesDatabase = [];

// Sample catalog data
const PRODUCTS = [
  {
    id: 'bouquet-aurora-gold',
    name: 'Bouquet Aurora Gold Deluxe',
    category: 'bouquets',
    price: 1350,
    rating: 4.9,
    description: 'Espectacular bouquet flotante con globo burbuja cristalino de 24" personalizado...',
  },
  {
    id: 'arco-organico-botanico',
    name: 'Arco Orgánico Eucalyptus & Gold',
    category: 'arcos',
    price: 3400,
    rating: 5.0,
    description: 'Diseño asimétrico orgánico con globos de múltiples calibres...',
  },
  {
    id: 'caja-luxury-noir',
    name: 'Caja Cilindro Velvet & Bubble Love',
    category: 'cajas',
    price: 1190,
    rating: 4.95,
    description: 'Caja cilíndrica de terciopelo artesanal con mini rosas...',
  },
];

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), app: 'Chilpayate Balloons API' });
});

// Products API
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'all') {
    return res.json(PRODUCTS.filter((p) => p.category === category));
  }
  res.json(PRODUCTS);
});

app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(product);
});

// Quotes & Orders API
app.post('/api/quotes', (req, res) => {
  const { name, phone, eventType, date, location, budget, notes } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Nombre y teléfono son obligatorios.' });
  }

  const newQuote = {
    id: `QUOTE-${Date.now()}`,
    name,
    phone,
    eventType: eventType || 'Cumpleaños',
    date: date || null,
    location: location || '',
    budget: budget || '',
    notes: notes || '',
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  quotesDatabase.push(newQuote);
  console.log('📌 Nueva cotización recibida en el servidor:', newQuote);

  res.status(201).json({
    success: true,
    message: 'Cotización registrada correctamente. Un asesor se comunicará contigo.',
    quote: newQuote,
  });
});

app.get('/api/quotes', (req, res) => {
  res.json({ total: quotesDatabase.length, quotes: quotesDatabase });
});

app.listen(PORT, () => {
  console.log(`🎈 Servidor de Chilpayate Balloons corriendo en http://localhost:${PORT}`);
});

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: Post[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    slug: "building-scalable-react-applications-with-typescript",
    excerpt: "Learn how to leverage TypeScript to build maintainable and scalable React applications with proper type safety.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
# Building Scalable React Applications with TypeScript

TypeScript has become the standard for large-scale React applications, providing type safety and better developer experience. In this post, we'll explore best practices for building scalable React applications with TypeScript.

## Why TypeScript with React?

TypeScript brings several benefits to React development:

- Static type checking to catch errors during development
- Better IDE support with autocomplete and navigation
- Improved documentation through explicit types
- Enhanced refactoring capabilities

## Setting Up a React TypeScript Project

Let's start by creating a new React project with TypeScript support:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

This creates a project with the basic TypeScript configuration you need to get started.

## Typing Component Props

One of the key benefits of TypeScript is being able to define the shape of your component props:

\`\`\`typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
\`\`\`

## Using TypeScript with Hooks

TypeScript works seamlessly with React hooks:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/user');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
\`\`\`

## Conclusion

TypeScript is a powerful tool for React development that helps catch errors early and provides better documentation. By adopting TypeScript in your React projects, you'll improve code quality and developer productivity.

In future posts, we'll explore more advanced TypeScript patterns for React, including generics, discriminated unions, and custom hooks with TypeScript.
    `,
    date: "April 15, 2023",
    readTime: 8,
    tags: ["react", "typescript", "javascript"],
    featured: true
  },
  {
    id: 2,
    title: "Mastering JavaScript Promises and Async/Await",
    slug: "mastering-javascript-promises-and-async-await",
    excerpt: "Dive deep into JavaScript's asynchronous programming patterns and learn how to effectively use Promises and async/await.",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
# Mastering JavaScript Promises and Async/Await

Asynchronous programming is a fundamental concept in JavaScript. In this post, we'll explore Promises and the async/await syntax that makes working with asynchronous code more manageable.

## Understanding Promises

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states:

- Pending: initial state, neither fulfilled nor rejected
- Fulfilled: the operation completed successfully
- Rejected: the operation failed

Let's look at a basic Promise example:

\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const success = true;
      
      if (success) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('Failed to fetch data');
      }
    }, 1000);
  });
};

fetchData()
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
\`\`\`

## Chaining Promises

One of the powerful features of Promises is the ability to chain them:

\`\`\`javascript
fetchUserData(userId)
  .then(user => fetchUserPosts(user.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error('Error in the chain:', error));
\`\`\`

## Introducing Async/Await

The async/await syntax provides a more concise and readable way to work with Promises:

\`\`\`javascript
const fetchUserData = async (userId) => {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    
    return comments;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Usage
fetchUserData(1)
  .then(comments => console.log(comments))
  .catch(error => console.error('Failed:', error));
\`\`\`

## Parallel Execution with Promise.all

When you need to run multiple asynchronous operations in parallel:

\`\`\`javascript
const fetchDashboardData = async () => {
  try {
    const [user, notifications, settings] = await Promise.all([
      fetchUser(),
      fetchNotifications(),
      fetchSettings()
    ]);
    
    return { user, notifications, settings };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};
\`\`\`

## Best Practices

1. Always handle errors with try/catch when using async/await
2. Use Promise.all for parallel execution
3. Be careful with loops and async/await
4. Remember that async functions always return a Promise

## Conclusion

Mastering Promises and async/await is essential for modern JavaScript development. These patterns make asynchronous code more manageable and readable, improving the overall quality of your codebase.
    `,
    date: "March 22, 2023",
    readTime: 10,
    tags: ["javascript", "web-development"]
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-with-nodejs-and-express",
    excerpt: "Learn how to build scalable and maintainable RESTful APIs using Node.js and Express framework.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
# Building RESTful APIs with Node.js and Express

RESTful APIs are the backbone of modern web applications. In this post, we'll explore how to build a robust API using Node.js and Express.

## Setting Up the Project

Let's start by setting up a new Node.js project:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express mongoose dotenv cors helmet
npm install --save-dev nodemon
\`\`\`

Create a basic server file (server.js):

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Designing RESTful Routes

Let's implement a basic CRUD API for a "products" resource:

\`\`\`javascript
// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);

// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    await product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
\`\`\`

Update server.js to include the routes:

\`\`\`javascript
// ... previous code

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// ... rest of the code
\`\`\`

## Implementing Authentication

A secure API should implement authentication. Here's a basic example using JWT:

\`\`\`javascript
// Install dependencies
// npm install jsonwebtoken bcryptjs

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);

// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
\`\`\`

## Conclusion

Building RESTful APIs with Node.js and Express provides a solid foundation for your web applications. By following RESTful principles and implementing proper authentication, you can create secure and scalable APIs that serve your frontend applications effectively.
    `,
    date: "February 10, 2023",
    readTime: 12,
    tags: ["node", "javascript", "web-development"]
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Which",
    slug: "css-grid-vs-flexbox-when-to-use-which",
    excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout system.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: "Full article content here...",
    date: "January 5, 2023",
    readTime: 7,
    tags: ["css", "web-development"]
  },
  {
    id: 5,
    title: "Getting Started with Next.js and Server-Side Rendering",
    slug: "getting-started-with-nextjs-and-server-side-rendering",
    excerpt: "Learn how to build fast, SEO-friendly React applications with Next.js framework.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: "Full article content here...",
    date: "December 18, 2022",
    readTime: 10,
    tags: ["react", "nextjs", "javascript"]
  },
  {
    id: 6,
    title: "Modern State Management in React with Context API and Hooks",
    slug: "modern-state-management-in-react-with-context-api-and-hooks",
    excerpt: "Discover how to effectively manage state in React applications using Context API and hooks without external libraries.",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: "Full article content here...",
    date: "November 30, 2022",
    readTime: 9,
    tags: ["react", "javascript"]
  }
];

export const getFeaturedPost = (): Post => {
  return blogPosts.find(post => post.featured) || blogPosts[0];
};

export const getRecentPosts = (excludeId?: number): Post[] => {
  return blogPosts
    .filter(post => !excludeId || post.id !== excludeId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
};

export const getPostsByTag = (tag: string): Post[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

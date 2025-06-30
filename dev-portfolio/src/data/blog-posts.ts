export interface BlogPostType {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
}

export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Building a Modern Web Application with Next.js and Tailwind CSS",
    slug: "building-modern-web-application-nextjs-tailwind",
    date: "2024-03-15",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Learn how to create a high-performance web application using Next.js and Tailwind CSS, with a focus on best practices and modern development techniques.",
    content: `# Building a Modern Web Application with Next.js and Tailwind CSS

Next.js has emerged as one of the most powerful React frameworks for building modern web applications. Combined with the utility-first approach of Tailwind CSS, developers can create stunning, high-performance websites with exceptional developer experience.

## Why Next.js?

Next.js provides several key features that make it an excellent choice for modern web development:

- **Server-side rendering (SSR)** and **static site generation (SSG)** out of the box
- **Automatic code splitting** for faster page loads
- **Built-in API routes** for backend functionality
- **Image optimization** via the \`Image\` component
- **Fast refresh** for a seamless development experience

## The Power of Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in web applications:

- **Utility-first approach** for rapid UI development
- **Highly customizable** design system
- **Small production bundles** with PurgeCSS integration
- **Responsive design** made simple

## Getting Started

Here's a simple example of how to create a component with Next.js and Tailwind CSS:

\`\`\`jsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Welcome to My App
        </h1>
        <p className="mt-6 text-xl text-center text-gray-600">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </section>
  );
}
\`\`\`

## Conclusion

Next.js and Tailwind CSS are a powerful combination for building modern web applications. They provide a great developer experience while delivering excellent performance and maintainability.`,
    tags: ["Next.js", "React", "Tailwind CSS", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630ec2f?w=1200&h=600&fit=crop",
    readingTime: "5 min read"
  },
  {
    id: 2,
    title: "Building a RESTful API with Node.js and Express",
    slug: "building-restful-api-nodejs-express",
    date: "2024-03-10",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Learn how to create a robust RESTful API using Node.js, Express, and MongoDB. This guide covers best practices, error handling, and authentication.",
    content: `# Building a RESTful API with Node.js and Express

Node.js and Express are a popular combination for building RESTful APIs. In this guide, we'll explore how to create a robust API with proper error handling, authentication, and database integration.

## Project Setup

First, let's set up our project structure:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express mongoose dotenv cors helmet morgan
\`\`\`

## Basic Server Setup

Here's a basic Express server setup:

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Conclusion

You now have a solid foundation for a Node.js REST API with Express and MongoDB. This architecture is scalable, maintainable, and follows best practices for production applications.`,
    tags: ["Node.js", "Express", "MongoDB", "API", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    readingTime: "8 min read"
  },
  {
    id: 3,
    title: "Understanding React Server Components in Next.js 13",
    slug: "understanding-react-server-components-nextjs-13",
    date: "2024-02-22",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Dive into React Server Components and understand how they're implemented in Next.js 13 to improve performance and developer experience.",
    content: `
# Understanding React Server Components in Next.js 13

React Server Components represent a paradigm shift in how we build React applications. Next.js 13 has fully embraced this technology, offering significant performance improvements and a better developer experience.

## What Are React Server Components?

React Server Components allow developers to render components on the server, reducing the JavaScript bundle size sent to the client. This results in faster page loads and improved performance, especially for data-heavy applications.

Key benefits include:

- **Reduced client-side JavaScript**
- **Direct access to backend resources**
- **Automatic code splitting**
- **Improved initial page load**

## Server Components vs. Client Components

In Next.js 13, components are server components by default. This means they:

- Run only on the server
- Have access to backend resources
- Cannot use hooks or browser APIs
- Don't increase the client JavaScript bundle

Client components are explicitly marked with the "use client" directive and:

- Run on both the client and server
- Can use React hooks, event handlers, and browser APIs
- Are hydrated on the client
- Increase the JavaScript bundle size

## Using Server Components in Next.js 13

Here's how to use Server Components effectively:

\`\`\`jsx
// app/page.tsx (Server Component)
import { getDatabaseData } from '@/lib/data';
import ClientCounter from './ClientCounter';

async function ServerComponent() {
  // Direct database access
  const data = await getDatabaseData();

  return (
    <div>
      <h1>Server-rendered data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Include a client component when needed */}
      <ClientCounter />
    </div>
  );
}

export default ServerComponent;
\`\`\`

\`\`\`jsx
// app/ClientCounter.tsx
"use client";

import { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Best Practices

When working with React Server Components:

1. **Default to server components** unless you need client-side interactivity
2. **Push interactivity down the component tree** to minimize client JavaScript
3. **Use "use client" boundaries strategically** to optimize performance
4. **Leverage server actions** for form submissions and data mutations

## Conclusion

React Server Components in Next.js 13 provide a powerful new way to build performant web applications. By understanding the differences between server and client components and when to use each, you can create faster, more efficient React applications.
    `,
    tags: ["React", "Next.js", "Server Components", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=630&fit=crop&q=80",
    readingTime: "10 min read"
  },
  {
    id: 4,
    title: "Mastering TypeScript: Advanced Types and Patterns",
    slug: "mastering-typescript-advanced-types-patterns",
    date: "2023-12-10",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Take your TypeScript skills to the next level by exploring advanced type features, design patterns, and real-world examples.",
    content: `
# Mastering TypeScript: Advanced Types and Patterns

TypeScript has become the language of choice for many developers building complex JavaScript applications. This article explores advanced TypeScript features that can help you write more robust, maintainable code.

## Advanced Type Features

### Conditional Types

Conditional types allow you to create types that depend on type conditions:

\`\`\`typescript
type IsArray<T> = T extends any[] ? true : false;

// Usage
type CheckString = IsArray<string>;  // false
type CheckArray = IsArray<number[]>; // true
\`\`\`

### Mapped Types

Mapped types allow you to transform the properties of an existing type:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Usage
interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
// Equivalent to: { readonly id: number; readonly name: string; }
\`\`\`

### Template Literal Types

TypeScript 4.1 introduced template literal types, which combine literals through concatenation:

\`\`\`typescript
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Margin = \`margin-\${Direction}\`;

// Margin will be: 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left'
\`\`\`

## Utility Types

TypeScript provides several built-in utility types that can help you manipulate types:

### Partial and Required

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties are optional
type PartialUser = Partial<User>;

// All properties are required (remove optional flags)
type RequiredUser = Required<User>;
\`\`\`

### Pick and Omit

\`\`\`typescript
// Only include specified properties
type UserBasicInfo = Pick<User, 'id' | 'name'>;

// Exclude specified properties
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

### Record

\`\`\`typescript
// Create an object type with specific key and value types
type UserRoles = Record<string, 'admin' | 'editor' | 'viewer'>;

const roles: UserRoles = {
  'user1': 'admin',
  'user2': 'editor'
};
\`\`\`

## Advanced Patterns

### The Builder Pattern

The builder pattern can be elegantly implemented in TypeScript:

\`\`\`typescript
class RequestBuilder {
  private url: string = '';
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
  private headers: Record<string, string> = {};
  private body: any = null;

  setUrl(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): RequestBuilder {
    this.method = method;
    return this;
  }

  setHeader(key: string, value: string): RequestBuilder {
    this.headers[key] = value;
    return this;
  }

  setBody(body: any): RequestBuilder {
    this.body = body;
    return this;
  }

  build(): Request {
    return new Request(this.url, {
      method: this.method,
      headers: this.headers,
      body: this.body ? JSON.stringify(this.body) : null
    });
  }
}

// Usage
const request = new RequestBuilder()
  .setUrl('https://api.example.com/data')
  .setMethod('POST')
  .setHeader('Content-Type', 'application/json')
  .setBody({ name: 'John' })
  .build();
\`\`\`

### The Factory Pattern

Factories can help create objects with complex initialization:

\`\`\`typescript
interface Product {
  name: string;
  price: number;
}

class ProductFactory {
  static createBook(name: string, price: number, author: string): Product & { author: string } {
    return { name, price, author };
  }

  static createElectronic(name: string, price: number, warranty: number): Product & { warranty: number } {
    return { name, price, warranty };
  }
}

// Usage
const book = ProductFactory.createBook('TypeScript Guide', 29.99, 'Jane Developer');
const laptop = ProductFactory.createElectronic('Laptop', 999.99, 24);
\`\`\`

## Type-Safe APIs

### Zod for Runtime Validation

Combining TypeScript with Zod provides both compile-time and runtime type safety:

\`\`\`typescript
import { z } from 'zod';

// Define a schema
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18).optional()
});

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Validate at runtime
function processUserData(data: unknown): User {
  return UserSchema.parse(data); // Throws if invalid
}

try {
  const user = processUserData({
    id: 1,
    name: 'John',
    email: 'invalid-email' // Will throw validation error
  });
} catch (error) {
  console.error('Validation failed:', error);
}
\`\`\`

## Conclusion

Mastering these advanced TypeScript features and patterns can significantly improve your development experience and code quality. TypeScript's type system is one of the most powerful available in mainstream programming languages, offering a balance between static typing and flexibility.

As you incorporate these techniques into your projects, you'll find that they not only catch errors early but also serve as documentation and design tools, making your codebase more maintainable and easier to reason about.
    `,
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop&q=80",
    readingTime: "15 min read"
  }
];

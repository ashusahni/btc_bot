export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export const projects: Project[] = [
  {
    title: "Image Classification with Deep Learning",
    description: "A convolutional neural network (CNN) model for classifying images into multiple categories using TensorFlow and Keras. Achieved 95% accuracy on the CIFAR-10 dataset.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tags: ["TensorFlow", "Keras", "CNN", "Deep Learning", "Python"],
    github: "https://github.com/example/image-classification-cnn",
    demo: "https://huggingface.co/spaces/example/image-classification-demo",
    category: "backend"
  },
  {
    title: "NLP Chatbot for Customer Support",
    description: "An intelligent chatbot built with spaCy and Rasa for automating customer support queries. Integrates with Slack and web chat interfaces.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["NLP", "spaCy", "Rasa", "Chatbot", "Python"],
    github: "https://github.com/example/nlp-chatbot",
    demo: "https://demo.com/nlp-chatbot",
    category: "fullstack"
  },
  {
    title: "Real-Time Object Detection",
    description: "A YOLOv5-based object detection system for real-time video streams. Deployed as a web app using FastAPI and React.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    tags: ["YOLOv5", "Computer Vision", "FastAPI", "React", "Python"],
    github: "https://github.com/example/object-detection-yolov5",
    demo: "https://demo.com/object-detection",
    category: "fullstack"
  },
  {
    title: "Time Series Forecasting Platform",
    description: "A platform for forecasting sales and demand using LSTM and Prophet. Features interactive dashboards for data visualization.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    tags: ["LSTM", "Prophet", "Time Series", "Dash", "Python"],
    github: "https://github.com/example/time-series-forecasting",
    demo: "https://demo.com/time-series-forecasting",
    category: "frontend"
  },
  {
    title: "End-to-End MLOps Pipeline",
    description: "A CI/CD pipeline for training, testing, and deploying ML models using MLflow, Docker, and GitHub Actions. Includes automated model monitoring.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["MLOps", "MLflow", "Docker", "CI/CD", "GitHub Actions"],
    github: "https://github.com/example/mlops-pipeline",
    caseStudy: "/projects/mlops-pipeline",
    category: "backend"
  },
  {
    title: "Text Summarization Web App",
    description: "A web application that uses Hugging Face Transformers to generate abstractive summaries of long articles. Built with Next.js and FastAPI.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    tags: ["Transformers", "Hugging Face", "NLP", "Next.js", "FastAPI"],
    github: "https://github.com/example/text-summarization-app",
    demo: "https://demo.com/text-summarization",
    category: "fullstack"
  }
]; 
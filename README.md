Command Center Dashboard
A unified operations dashboard for everything I run: Lynn Living (e‑commerce), Lynn Care (home care agency), my NGO in Ghana, and my cloud engineering work.
Live dashboard: your-domain.com (coming soon)
 
Purpose
I operate multiple businesses and initiatives across more than ten platforms. YouTube analytics, Etsy and marketplace sales, market research, documents, and project timelines all live in different tools. This dashboard gives me a single, trusted view of operations and serves as a live example of how I design, implement, and operate cloud systems end to end.
 
Capabilities
•	Sales dashboard – Consolidated view of Etsy, eBay, and TikTok Shop sales.
•	YouTube analytics – Views, subscribers, and growth trends across my channels.
•	Market research feed – Reddit‑based signals for home care, NGO funding, and small business trends.
•	Project tracker – Timelines and status for Lynn Living collections, Goop MVP, Willy workspace, and more.
•	Document hub – Google Drive integration for SOPs, contracts, and design assets.
•	Team visibility – One place for collaborators to understand what’s happening across all ventures.
 
Tech stack
Layer: Frontend
Tool: React
Layer: Hosting
Tool: AWS S3 + CloudFront
Layer: Backend
Tool: AWS Lambda + API Gateway
Layer: Database
Tool: AWS DynamoDB
Layer: Auth
Tool: AWS Cognito
Layer: Infrastructure
Tool: Terraform
Layer: Monitoring
Tool: AWS CloudWatch
Layer: Version Control
Tool: GitHub
 
Architecture
User Browser
↓
CloudFront CDN
↓
React Dashboard (S3)
↓
AWS Cognito (authentication)
↓
AWS Lambda functions (APIs)
↓
DynamoDB + CloudWatch
↓
External APIs:
YouTube | Etsy | eBay | Reddit | Google Drive
 
Design choices
•	Lambda – Serverless execution with pay‑per‑use pricing; ideal for bursty dashboard workloads and keeps monthly cost in the ~£3–5 range at my scale.
•	DynamoDB – Managed NoSQL store with a generous free tier and simple scaling for key‑value and time‑series style data.
•	Terraform – Infrastructure as code so the entire stack is reproducible, reviewable, and version‑controlled.
•	CloudWatch – Native logging and metrics for Lambda, API Gateway, and DynamoDB with no extra components to manage.
•	Cognito – Managed authentication and user pools so I don’t carry auth or password risk in custom code.
 
Getting started
Prerequisites
•	AWS account (free tier eligible)
•	Node.js 18+
•	Terraform
•	Git
Setup
1.	Clone the repository
git clone https://github.com/yourusername/command-center.git
cd command-center
2.	Create your API credentials
•	YouTube API key – Google Cloud Console (YouTube Data API v3)
•	Etsy API key – developers.etsy.com
•	eBay API key – developer.ebay.com
•	Reddit API app – reddit.com/prefs/apps
•	Google Drive API key – Google Cloud Console
3.	Configure environment variables
Create a .env file in the project root (do not commit this file):
YOUTUBE_API_KEY=your_key
ETSY_API_KEY=your_key
EBAY_API_KEY=your_key
REDDIT_CLIENT_ID=your_id
REDDIT_CLIENT_SECRET=your_secret
GOOGLE_DRIVE_API_KEY=your_key
AWS_REGION=us-east-1
4.	Provision infrastructure
cd terraform
terraform init
terraform apply
5.	Deploy frontend
cd ..
npm install
npm run build
aws s3 sync build/ s3://your-bucket-name
6.	Access the dashboard
Open your CloudFront URL in a browser and log in via Cognito.
 
Delivery timeline
Week 1 – AWS setup, API keys, Terraform skeleton – Not started
Week 2–3 – YouTube API integration – Not started
Week 4–5 – Etsy + eBay sales data – Not started
Week 6–7 – Reddit scraper – Not started
Week 8 – Google Drive integration – Not started
Week 9 – UI refinement + authentication – Not started
Week 10 – Launch + documentation – Not started
Update these statuses as you complete each phase.
 
Monitoring and observability
All application logs and metrics are centralized in CloudWatch:
•	Lambda execution logs
•	API errors and non‑200 responses
•	Data ingestion status by source
•	Latency and basic performance metrics
This provides a single place to troubleshoot issues and shows how I approach production observability.
 
Security
•	API secrets stored in AWS Secrets Manager or environment variables, never hardcoded.
•	IAM roles scoped with least privilege; each Lambda only has access to the resources it needs.
•	Cognito manages user authentication and token handling.
•	HTTPS enforced at the edge via CloudFront.
•	Local .env files are excluded from version control.
 
Learning outcomes
(Updated as the project progresses.)
•	Designing Lambda functions around multiple independent external data sources.
•	Modeling and querying data in DynamoDB for aggregates and dashboards.
•	Applying cloud security practices: IAM design, secret management, and Cognito.
•	Using Terraform for repeatable, version‑controlled infrastructure changes.
•	Handling API rate limits, failures, and retries across third‑party services.
•	Automating delivery with a CI/CD pipeline (GitHub Actions).
 
Cost profile
Service: AWS Lambda – ~£1.00/month
Service: DynamoDB – ~£0.50/month
Service: S3 – ~£0.25/month
Service: CloudFront – ~£0.25/month
Service: Domain – ~£1.00/month
Total: ~£3–5/month (designed to stay in free/low‑cost tiers while using production services)
 
Roadmap
•	Email and/or SMS alerts for sales spikes and anomalies.
•	Mobile‑friendly dashboard layout.
•	CSV export for accounting and reporting.
•	TikTok Shop integration (once API access is available).
•	Dedicated Goop admin dashboard on the same stack (separate repository).
 
Why this project matters
•	Real cloud architecture – A working system built around an actual multi‑business operations problem.
•	Production mindset – Monitoring, logging, security, and cost considered from the start.
•	Full‑stack ownership – From React UI through to AWS infrastructure and operations.
•	Strong business context – Designed by someone with 15+ years in operations, not just code.
•	Self‑driven delivery – Defined, built, and documented independently, outside any formal course.
 
Follow the build
YouTube (MyLynnLiving): [link]
YouTube (Lynn Living Studios): [link]
LinkedIn: [link]
GitHub: [link]
 
License
MIT License – you’re welcome to fork this and adapt it for your own operations.
 

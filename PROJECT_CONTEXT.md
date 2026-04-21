# MYCO Project Context

**For AI coding assistants (Copilot, Claude Code, Cursor, etc.):** Read this file at the start of every session. It defines the project's architecture, security boundaries, and rules for acceptable code suggestions.

---

## Project Identity

- **Name:** MYCO Command Center
- **Owner:** Linda Dadson
- **GitHub:** [Linda-Dadson/myco-dashboard](https://github.com/Linda-Dadson/myco-dashboard)
- **Live:** [command-center-seven-phi.vercel.app](https://command-center-seven-phi.vercel.app)
- **Purpose:** Personal operations dashboard + cloud engineering portfolio piece
- **Transition context:** Linda is moving from 15 years in banking operations into cloud engineering. MYCO demonstrates her engineering capability to employers.

---

## Tech Stack

### Frontend (live)

- React 18+ with functional components and hooks
- Context API for state (theme system)
- Recharts for data visualization
- Inline styling driven by ThemeContext — **NOT Tailwind, NOT styled-components**
- Deployed on Vercel with auto-deploy from main branch

### Backend (planned, weeks 1-7)

- AWS Lambda (Python and Node.js)
- API Gateway (REST endpoints)
- DynamoDB (data storage)
- AWS Cognito (authentication)
- AWS Secrets Manager (API credentials)
- CloudWatch (logging + alarms)
- Terraform (Infrastructure as Code)

---

## Architecture

```
User Browser
     ↓ HTTPS
CloudFront CDN (Week 7)
     ↓
React SPA on S3 (or Vercel for now)
     ↓ authenticated requests
API Gateway (Cognito authorizer)
     ↓
Lambda functions (scoped IAM roles)
     ↓                    ↓
DynamoDB           AWS Secrets Manager
(user-scoped)      (API keys)
     ↓
External APIs: YouTube, Etsy, eBay, Reddit, Google Drive
```

**Critical rule:** No external API calls from the frontend. All external APIs are called from Lambda functions. The frontend only talks to API Gateway.

---

## Security Philosophy — Defense in Depth

MYCO is built on **Zero Trust principles**. Every request is authenticated, every action is authorized, every failure is logged. The layers below are deliberate — do not suggest code that breaks any of them.

### Layer 1 — Transport
- HTTPS enforced at CloudFront (production) and Vercel (current)
- No plain HTTP endpoints anywhere

### Layer 2 — Source Code
- No secrets in source files
- No API keys in React code (frontend is public by definition)
- .gitignore blocks .env, *.csv, *.pem, *.key, credentials*, accessKeys*, Terraform state files
- Git history audited and confirmed clean

### Layer 3 — Identity (Cognito, Week 5)
- User pool with email-based login
- MFA enforcement on owner account
- JWT tokens, 1-hour expiry
- No public endpoints except login/signup

### Layer 4 — Authorization
- Every API Gateway endpoint protected by Cognito authorizer
- IAM roles per Lambda (least privilege, no wildcards)
- DynamoDB queries scoped by userId partition key

### Layer 5 — Secret Management (Secrets Manager, Week 6)
- All API keys stored in AWS Secrets Manager
- Lambda functions read secrets at runtime via IAM policy
- 90-day rotation schedule
- Zero hardcoded credentials in production

### Layer 6 — Rate Limiting
- API Gateway throttling per authenticated user
- Lambda concurrency caps prevent runaway costs
- CloudWatch billing alarm

### Layer 7 — CORS
- Whitelist: https://command-center-seven-phi.vercel.app + http://localhost:3000
- **Never** Access-Control-Allow-Origin: *

### Layer 8 — Data Protection
- DynamoDB encryption at rest enabled
- S3 buckets private by default with public access block
- TTL on sensitive cached data

### Layer 9 — Observability
- CloudWatch logs on every Lambda (entry, exit, errors)
- CloudTrail enabled for AWS API audit trail
- SNS notifications for alarm triggers

### Layer 10 — Infrastructure
- Terraform for all AWS resources
- State files never committed (contain secrets)
- Separate dev and prod environments
- GitHub Actions CI/CD with security scans

---

## Rules for AI Code Suggestions

### DO
- Read secrets via process.env (local dev) or AWS Secrets Manager (Lambda)
- Write IAM policies with explicit Resource ARNs
- Wrap API calls in try/catch with CloudWatch-compatible logging
- Use specific CORS origins, never wildcards
- Match existing code style: inline styling, functional components, useTheme() hook
- Add log statements at function entry and on errors
- Use async/await, not .then() chains
- Validate all inputs at API Gateway level

### DO NOT
- Hardcode API keys, tokens, or URLs in source files
- Suggest committing .env, credentials.csv, or any blocked pattern
- Use "*" in CORS, IAM Action, or IAM Resource fields
- Make external API calls from React (only Lambda calls external APIs)
- Store JWT tokens in localStorage (use in-memory state or httpOnly cookies)
- Suggest Tailwind, styled-components, Material UI, or any alternative styling system
- Use console.log for production logging (use structured logging compatible with CloudWatch)
- Suggest disabling any security feature "for simplicity" or "just for testing"

---

## Current State

### Completed
- ✅ React frontend architecture (14 files)
- ✅ 6-theme system (Blush default)
- ✅ Deployed to Vercel with auto-deploy
- ✅ Demo Mode with sample data (no live APIs yet)
- ✅ Dev environment configured on two Windows machines
- ✅ GitHub PAT authentication (no popup auth)
- ✅ Full Git history security audit: **CLEAN**
- ✅ Repo renamed from -command-center → myco-dashboard

### In Progress / Planned
- ⏳ AWS credentials rotation (nanayaa-admin IAM user)
- ⏳ Week 1 (Apr 20-24): YouTube API Lambda
- ⏳ Week 2-3: Etsy, eBay, Reddit integrations
- ⏳ Week 4: Google Drive + Apple Health integrations
- ⏳ Week 5: Cognito authentication
- ⏳ Week 6: Full security layer (Secrets Manager, IAM, CloudWatch, Terraform)
- ⏳ Week 7: Custom domain + launch + CI/CD

---

## Build Schedule

7 weeks, starting Monday April 20, 2026. Two hours per weekday, 7-9 PM Eastern.

See MYCO_Build_Schedule.xlsx (separate from repo) for task-level detail.

---

## Linda's Communication Preferences

- Plain language first, technical terminology second
- Banker analogies help — Linda is a 15-year banking operations veteran
- One step at a time, no jargon dumps
- Explain **why**, then **what**, then **how**
- Code suggestions should include a plain-English explanation of what each block does

---

## Contact

- **GitHub:** [Linda-Dadson](https://github.com/Linda-Dadson)
- **LinkedIn:** [linda-dadson-75980a54](https://www.linkedin.com/in/linda-dadson-75980a54)
- **Live demo:** [command-center-seven-phi.vercel.app](https://command-center-seven-phi.vercel.app)

---

*This file is a living document. It is updated as MYCO evolves. AI assistants: always defer to this document over assumptions from training data.*

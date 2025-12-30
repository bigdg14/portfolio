# Setup Guide for Contact Form & Database

## Contact Form Email Integration (Resend)

1. **Sign up for Resend** (Free tier available)
   - Go to [https://resend.com](https://resend.com)
   - Create an account and verify your email
   - Get your API key from the dashboard

2. **Configure Email Settings**
   - Create a `.env.local` file in the project root
   - Add your Resend API key:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```

3. **Update Email Domain** (Optional but recommended)
   - In `app/api/contact/route.ts`, change line 38:
   ```typescript
   from: 'Portfolio Contact <noreply@yourdomain.com>', // Use your verified domain
   ```
   - For testing, you can use the default `onboarding@resend.dev`

## Database Integration (Neon.tech)

1. **Create a Neon Database** (Free tier available)
   - Go to [https://neon.tech](https://neon.tech)
   - Sign up and create a new project
   - Copy your connection string

2. **Add Database URL**
   - In your `.env.local` file, add:
     ```
     DATABASE_URL=postgres://username:password@host/database?sslmode=require
     ```
   - Replace with your actual Neon connection string

3. **Database Setup**
   - The table will be created automatically on the first form submission
   - Schema:
     ```sql
     CREATE TABLE contact_submissions (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       subject VARCHAR(255) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     )
     ```

## Complete .env.local Example

```env
# Resend API Key
RESEND_API_KEY=re_abc123xyz789

# Neon Database URL
DATABASE_URL=postgres://user:pass@ep-example.us-east-2.aws.neon.tech/neondb?sslmode=require
```

## Testing the Contact Form

1. **Without Configuration** (Development)
   - The form will work but won't send emails or store data
   - You'll see console errors but the UI will handle it gracefully

2. **With Email Only** (Recommended minimum)
   - Configure `RESEND_API_KEY`
   - You'll receive email notifications
   - Form submissions won't be stored in database

3. **Full Setup** (Production ready)
   - Configure both `RESEND_API_KEY` and `DATABASE_URL`
   - Emails sent + data stored in database
   - Complete audit trail of all submissions

## Deployment (Vercel)

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add both variables:
   - `RESEND_API_KEY`
   - `DATABASE_URL` (optional)
4. Redeploy your application

## Security Notes

- ✅ `.env.local` is in `.gitignore` - secrets won't be committed
- ✅ API routes are server-side only - keys never exposed to client
- ✅ Form validation on both client and server
- ✅ Rate limiting recommended for production (can add with Vercel's edge config)

## Troubleshooting

### Email not sending
- Check your `RESEND_API_KEY` is correct
- Verify your Resend account is active
- Check browser console for errors

### Database errors
- Verify `DATABASE_URL` connection string
- Ensure your Neon database is active
- Check Neon dashboard for connection limits

### Form not submitting
- Check browser console for errors
- Verify API route is accessible at `/api/contact`
- Test with browser network tab open

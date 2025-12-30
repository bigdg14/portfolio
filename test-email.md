# Email Troubleshooting Checklist

## Things to Check:

### 1. Resend Domain Verification
- [ ] Go to Resend dashboard → Domains
- [ ] Verify `hype-us.com` shows a green checkmark (verified)
- [ ] If not verified, you may need to wait for DNS propagation (can take up to 48 hours)

### 2. Dev Server Restart
- [ ] Stop the dev server (Ctrl+C)
- [ ] Start it again: `npm run dev`
- [ ] Environment variables only load on server start

### 3. Check Browser Console
When you submit the form:
- [ ] Open DevTools (F12)
- [ ] Go to Console tab
- [ ] Submit the form
- [ ] Look for any red errors

### 4. Check Terminal Output
- [ ] Look at your terminal where `npm run dev` is running
- [ ] After form submission, you should see either:
  - Success (no error)
  - OR an error message from the API route

### 5. Test with curl (Alternative)
Run this in a new terminal to test the API directly:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

You should see: `{"message":"Message sent successfully!"}`

### 6. Check Resend Dashboard
- [ ] Go to Resend → Logs
- [ ] Look for your email attempt
- [ ] If it shows an error, that will tell us what's wrong

### 7. Verify API Key Permissions
- [ ] In Resend, check if your API key has "Send" permissions
- [ ] Make sure it's not a read-only key

## Common Issues:

**Domain not verified:**
- Emails won't send until DNS records are added and verified
- Use `onboarding@resend.dev` temporarily while waiting

**Wrong email format:**
- Ensure `from` email matches your verified domain

**API key issues:**
- Key must start with `re_`
- Must have send permissions
- Must not be expired

## Temporary Workaround

If domain verification is taking too long, change line 52 in `app/api/contact/route.ts` back to:
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

This will work immediately but can only send to the email you used to sign up for Resend.

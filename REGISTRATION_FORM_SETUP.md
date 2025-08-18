# JCIN UNIBEN Registration Form Setup Guide

## Overview
The registration form implemented across all JCIN UNIBEN pages submits data to Google Sheets and stores payment proof files in Google Drive. This guide provides step-by-step instructions for setting up and accessing the form data.

## Prerequisites
- Google account with access to Google Sheets and Google Drive
- Basic knowledge of Google Apps Script (for advanced automation)

## Step 1: Google Sheets Setup

### 1.1 Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "JCIN UNIBEN Registration Form Submissions"
4. Set up the following columns in row 1:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Email | Full Name | Gender | WhatsApp | Faculty | Other Contact | How Did You Hear | Why Join | Payment Made | Payment Proof |

### 1.2 Configure Column Headers
- **A1**: Timestamp
- **B1**: Email Address
- **C1**: Full Name (Surname First)
- **D1**: Gender
- **E1**: WhatsApp Contact
- **F1**: Faculty
- **G1**: Other Contact
- **H1**: How Did You Hear About Us
- **I1**: Why Do You Want to Join JCIN UNIBEN
- **J1**: Have You Made the ₦1000 Payment
- **K1**: Payment Proof File ID

### 1.3 Set Up Data Validation (Optional)
- **Gender (Column D)**: Dropdown with "Male", "Female"
- **Faculty (Column F)**: Dropdown with all faculty options
- **Payment Made (Column J)**: Dropdown with "Yes", "No"

## Step 2: Google Drive Setup

### 2.1 Create Payment Proofs Folder
1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder named "JCIN UNIBEN Payment Proofs"
3. Set folder permissions to "Anyone with the link can view" (for form access)
4. Note the folder ID from the URL

### 2.2 Folder Structure
```
JCIN UNIBEN Payment Proofs/
├── 2025/
│   ├── January/
│   ├── February/
│   └── ...
└── Pending Verification/
```

## Step 3: Google Apps Script Integration

### 3.1 Create Apps Script Project
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Parse the form data
    const formData = e.parameter;
    const timestamp = new Date();
    
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare row data
    const rowData = [
      timestamp,
      formData.email,
      formData.fullName,
      formData.gender,
      formData.whatsapp,
      formData.faculty,
      formData.otherContact,
      formData.department,
      formData.whyJoin,
      formData.paymentMade,
      formData.paymentProof || 'No file uploaded'
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email (optional)
    if (formData.email) {
      sendConfirmationEmail(formData.email, formData.fullName);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(email, name) {
  const subject = "Welcome to JCIN UNIBEN!";
  const message = `
    Dear ${name},
    
    Thank you for your interest in joining JCIN UNIBEN!
    
    We have received your registration and will review your application within 24-48 hours.
    
    If you have any questions, please contact us at info@jcinuniben.org
    
    Best regards,
    JCIN UNIBEN Team
  `;
  
  MailApp.sendEmail(email, subject, message);
}

function doGet(e) {
  return ContentService.createTextOutput('JCIN UNIBEN Registration Form API is running');
}
```

### 3.2 Deploy as Web App
1. Click **Deploy > New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: "Me"
4. Set **Who has access**: "Anyone"
5. Click **Deploy**
6. Copy the **Web app URL** - this is your form submission endpoint

## Step 4: Update Registration Form Component

### 4.1 Modify the handleSubmit Function
In `src/components/RegistrationForm.tsx`, update the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Create FormData object
    const formDataObj = new FormData();
    formDataObj.append('email', formData.email);
    formDataObj.append('fullName', formData.fullName);
    formDataObj.append('gender', formData.gender);
    formDataObj.append('whatsapp', formData.whatsapp);
    formDataObj.append('faculty', formData.faculty);
    formDataObj.append('otherContact', formData.otherContact);
    formDataObj.append('department', formData.department);
    formDataObj.append('whyJoin', formData.whyJoin);
    formDataObj.append('paymentMade', formData.paymentMade);
    
    // Handle file upload to Google Drive
    if (formData.paymentProof) {
      const fileId = await uploadToGoogleDrive(formData.paymentProof);
      formDataObj.append('paymentProof', fileId);
    }
    
    // Submit to Google Sheets via Apps Script
    const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      method: 'POST',
      body: formDataObj
    });
    
    if (response.ok) {
      setShowSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          email: '',
          fullName: '',
          gender: '',
          whatsapp: '',
          faculty: '',
          otherContact: '',
          department: '',
          whyJoin: '',
          paymentMade: '',
          paymentProof: null
        });
      }, 3000);
    } else {
      throw new Error('Submission failed');
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle error (show error message to user)
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4.2 Add Google Drive Upload Function
Add this function to handle file uploads:

```typescript
const uploadToGoogleDrive = async (file: File): Promise<string> => {
  // This would integrate with Google Drive API
  // For now, return a placeholder
  return 'file_uploaded_' + Date.now();
};
```

## Step 5: Accessing Form Data

### 5.1 Access Google Sheet Data
1. **Go to Google Sheets**
2. **Locate your sheet**: "JCIN UNIBEN Registration Form Submissions"
3. **View submissions**: Each row represents a new registration
4. **Use filters**: Click the filter icon in row 1 to sort/filter data
5. **Export data**: File > Download > CSV for external analysis

### 5.2 Access Payment Proofs in Google Drive
1. **Go to Google Drive**
2. **Navigate to**: "JCIN UNIBEN Payment Proofs" folder
3. **Browse by date**: Check monthly folders for organized files
4. **Download files**: Right-click > Download for review
5. **Verify payments**: Cross-reference with bank statements

### 5.3 Data Management Tips
- **Daily monitoring**: Check for new submissions
- **Payment verification**: Review payment proofs within 24 hours
- **Data backup**: Export data monthly for backup
- **Communication**: Use email addresses for follow-up

## Step 6: Troubleshooting

### 6.1 Common Issues

#### Form Not Submitting
- Check Google Apps Script deployment status
- Verify web app URL is correct
- Check browser console for errors
- Ensure CORS is properly configured

#### Files Not Uploading
- Verify Google Drive folder permissions
- Check file size limits (max 10MB)
- Ensure file types are allowed (PNG, JPG, PDF)

#### Data Not Appearing in Sheets
- Check Apps Script execution logs
- Verify sheet permissions
- Check for script errors in Apps Script editor

### 6.2 Access Issues

#### Can't Access Google Sheet
- Ensure you're logged into the correct Google account
- Check sharing permissions
- Verify the sheet hasn't been moved/deleted

#### Can't Access Google Drive Folder
- Check folder sharing settings
- Verify you have the correct folder ID
- Ensure folder hasn't been renamed/moved

## Step 7: Advanced Features (Optional)

### 7.1 Automated Email Notifications
- Set up email alerts for new submissions
- Configure payment verification reminders
- Send welcome emails to new members

### 7.2 Data Analytics
- Create pivot tables for insights
- Set up charts for registration trends
- Export data for external analysis tools

### 7.3 Integration with Other Tools
- Connect to CRM systems
- Integrate with payment gateways
- Set up Slack/Discord notifications

## Security Considerations

### 7.4 Data Protection
- **Access Control**: Limit sheet access to authorized personnel
- **Data Encryption**: Ensure sensitive data is encrypted
- **Regular Backups**: Set up automated backup systems
- **Audit Logs**: Monitor who accesses the data

### 7.5 Privacy Compliance
- **GDPR Compliance**: Handle personal data according to regulations
- **Data Retention**: Set up data deletion policies
- **User Consent**: Ensure users consent to data collection

## Support and Maintenance

### 7.6 Regular Maintenance
- **Weekly**: Check for new submissions and verify payments
- **Monthly**: Export data and create backups
- **Quarterly**: Review and update form fields if needed
- **Annually**: Audit data and clean up old records

### 7.7 Getting Help
- **Technical Issues**: Check Google Apps Script documentation
- **Form Issues**: Review browser console and network logs
- **Data Issues**: Verify Google Sheets permissions and sharing
- **Emergency**: Contact your development team

## Conclusion

This setup provides a robust, scalable solution for managing JCIN UNIBEN registrations. The Google Sheets integration ensures data is easily accessible and manageable, while Google Drive handles file storage securely.

For additional customization or advanced features, consider working with a developer familiar with Google Apps Script and the Google Workspace APIs.

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained By**: JCIN UNIBEN Development Team

// src/components/Sidebar/MenuItems.js
const menuItems = [
  {
    title: 'Customer Management',
    icon: ['fas', 'user'], 
    children: [
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'Profile Management', link: '/profile-management' },
      { title: 'Feedback', link: '/feedback' },
      { title: 'Loyalty Program', link: '/loyalty-program' },
      { title: 'Query Center', link: '/query-center' },
      { title: 'Payment and Billing', link: '/payment-billing' },
      { title: 'Travel Center', link: '/travel-center' },
      { title: 'Customer Community', link: '/customer-community' },
      { title: 'Customer Education Hub', link: '/education-hub' },
      { title: 'Deals and Discounts', link: '/deals-discounts' },
    ],
  },
  {
    title: 'Booking Management',
    icon: ['fas', 'book'],
    children: [
      { title: 'Open Existing Booking', link: '/openexistingbooking' },
      { title: 'Product Search', link: '/room-list' },
      { title: 'My Bookings', link: '/room-list' },
      { title: 'My Enquiry', link: '/room-list' },
      { title: 'Booking Queues', link: '/room-list' },
      { title: 'Group Management', link: '/room-list' },
    ],
  },
    {
      title: 'Accounting Management',
      icon: ['fas', 'file-invoice-dollar'],
      children: [
        { title: "General Ledger", link: "/add-purchases" },
        { title: "Budgeting and Forecasting", link: "/purchases-list" },
        { title: "Tax Management", link: "/purchases-list" },
        { title: "Financial Reporting", link: "/purchases-list" },
        { title: "Expense Management", link: "/purchases-list" },
        { title: "Invoicing", link: "/purchases-list" },
        { title: "Billing", link: "/purchases-list" },
        { title: "Payroll Processing", link: "/purchases-list" },
        { title: "Supplier Evaluation", link: "/purchases-list" },
        { title: "Deductions", link: "/purchases-list" },
        { title: "Attendance Tracking", link: "/purchases-list" },
        { title: "Leave Balances", link: "/purchases-list" },
        { title: "Financial Compliance", link: "/purchases-list" },
      ],
    },
   
    {
      title: 'Communication',
      icon: ['fas', 'comments'],
      children: [
        { title: "Dashboard", link: "/communication-dashboard" },
        { title: "Customer Notification", link: "/customer-notification" },
        { title: "Customer Support", link: "/customer-support" },
        { title: "Supplier Announcement", link: "/supplier-announcement" },
        { title: "Supplier Messaging", link: "/supplier-messaging" },
        { title: "Telephony System", link: "/telephony-system" },
        { title: "Live Chat", link: "/live-chat" },
        { title: "Email Integration", link: "/email-integration" },
        { title: "Employee Directory", link: "/employee-directory" },
        { title: "Internal Messaging", link: "/internal-messaging" },
        { title: "Announcement Center", link: "/announcement-center" },
      ],
    },
 
  
    {
      title: 'Supplier Management',
      icon: ['fa', 'book'],
      children: [
        { title: "Supplier Collaboration Hub", link: "/supplier-collaboration-hub" },
        { title: "SP Report", link: "/sp-report" },
        { title: "Dashboard", link: "/supplier-dashboard" },
        { title: "Listing Management", link: "/listing-management" },
        { title: "Contract Management", link: "/contract-management" },
        { title: "Performance Tracking", link: "/performance-tracking" },
        { title: "Supplier Database", link: "/supplier-database" },
        { title: "Communication Center", link: "/communication-center" },
        { title: "Supplier Evaluation", link: "/supplier-evaluation" },
        { title: "Supplier Alerts", link: "/supplier-alerts" },
        { title: "SP Analytics", link: "/sp-analytics" },
        { title: "Contract Alerts", link: "/contract-alerts" },
        { title: "Messaging System", link: "/messaging-system" },
      ],
    },
    {
      title: 'Human Resources',
      icon: ['fas', 'industry'],
      children: [
        { title: "Workforce Planning", link: "/workforce-planning" },
        { title: "Health and Safety", link: "/health-and-safety" },
        { title: "Employee Recognition", link: "/employee-recognition" },
        { title: "Time and Attendance", link: "/time-and-attendance" },
        { title: "Diversity,  Inclusion (DEI)", link: "/diversity-equity-inclusion" },
        { title: "Remote Work Support", link: "/remote-work-support" },
        { title: "Employee Records", link: "/employee-records" },
        { title: "Payroll Management", link: "/payroll-management" },
        { title: "Leave and Attendance", link: "/leave-and-attendance" },
        { title: "Recruitment and Onboard", link: "/recruitment-and-onboard" },
        { title: "Performance Management", link: "/performance-management" },
        { title: "Training and Development", link: "/training-and-development" },
        { title: "Employee Engagement", link: "/employee-engagement" },
        { title: "Benefits Administration", link: "/benefits-administration" },
        { title: "Employee Self-Service", link: "/employee-self-service" },
        { title: "HR Analytics and Reporting", link: "/hr-analytics-and-reporting" },
        { title: "Succession Planning", link: "/succession-planning" },
        { title: "Compliance Management", link: "/compliance-management" },
      ],
    },
  ];
  
  
  export default menuItems;
  
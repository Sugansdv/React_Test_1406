export const mockTickets = [
  {
    id: 'TCK-2025-001',
    subject: 'App crashes on startup',
    status: 'Open',
    priority: 'Urgent', // was 'High'
    createdAt: '2025-06-13T09:15:00Z',
    customer: 'Emily Carter',
    assignedTo: 'Agent Sugan',
    messages: [
      { sender: 'customer', content: 'The app crashes immediately after I open it.' },
    ],
  },
  {
    id: 'TCK-2025-002',
    subject: 'Unable to update profile',
    status: 'Pending',
    priority: 'Normal',
    createdAt: '2025-06-11T14:40:00Z',
    customer: 'Frank Harris',
    assignedTo: 'Agent Vishwa',
    messages: [
      { sender: 'customer', content: 'My profile picture and info are not saving.' },
      { sender: 'Agent Vishwa', content: 'Can you try from a different browser or device?' },
    ],
  },
  {
    id: 'TCK-2025-003',
    subject: 'Email notifications not received',
    status: 'Closed',
    priority: 'Minor', // was 'Low'
    createdAt: '2025-06-09T12:05:00Z',
    customer: 'Grace Liu',
    assignedTo: 'Agent Ron',
    messages: [
      { sender: 'customer', content: 'I’m not getting any notification emails.' },
      { sender: 'Agent Ron', content: 'We resolved the mail server delay. It should work now.' },
    ],
  },
  {
    id: 'TCK-2025-004',
    subject: 'Suggestion: Add file upload feature',
    status: 'Open',
    priority: 'Minor', // was 'Low'
    createdAt: '2025-06-14T11:20:00Z',
    customer: 'Henry Thompson',
    assignedTo: 'Agent sugan',
    messages: [
      { sender: 'customer', content: 'It would be great to upload documents in tickets.' },
    ],
  },
  {
    id: 'TCK-2025-005',
    subject: 'Incorrect billing amount',
    status: 'Pending',
    priority: 'Urgent', // was 'High'
    createdAt: '2025-06-12T10:30:00Z',
    customer: 'Isabella Green',
    assignedTo: 'Agent Ron',
    messages: [
      { sender: 'customer', content: 'I was overcharged on my last invoice.' },
      { sender: 'Agent Ron', content: 'We’re verifying your billing history. Will update soon.' },
    ],
  },
  {
    id: 'TCK-2025-006',
    subject: 'Cannot reset password',
    status: 'Open',
    priority: 'Normal', 
    createdAt: '2025-06-14T13:50:00Z',
    customer: 'Jason Kim',
    assignedTo: 'Agent Dharun',
    messages: [
      { sender: 'customer', content: 'The password reset link is not working.' },
    ],
  },
];

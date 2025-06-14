export const mockTickets = [
  {
    id: '1',
    subject: 'App crashes on startup',
    status: 'Open',
    priority: 'Urgent', // was 'High'
    createdAt: '2025-06-13T09:15:00Z',
    customer: 'Emily Carter',
    assignedTo: 'Agent Ron',
    messages: [
      { sender: 'customer', content: 'The app crashes immediately after I open it.' },
      { sender: 'agent', content: 'Thanks for reporting. We’re investigating the issue.' },
    ],
  },
  {
    id: '2',
    subject: 'Unable to update profile',
    status: 'Pending',
    priority: 'Normal', // was 'Medium'
    createdAt: '2025-06-11T14:40:00Z',
    customer: 'Frank Harris',
    assignedTo: 'Agent Mia',
    messages: [
      { sender: 'customer', content: 'My profile picture and info are not saving.' },
      { sender: 'agent', content: 'Can you try from a different browser or device?' },
    ],
  },
  {
    id: '3',
    subject: 'Email notifications not received',
    status: 'Closed',
    priority: 'Minor', // was 'Low'
    createdAt: '2025-06-09T12:05:00Z',
    customer: 'Grace Liu',
    assignedTo: 'Agent Ron',
    messages: [
      { sender: 'customer', content: 'I’m not getting any notification emails.' },
      { sender: 'agent', content: 'We resolved the mail server delay. It should work now.' },
    ],
  },
  {
    id: '4',
    subject: 'Suggestion: Add file upload feature',
    status: 'Open',
    priority: 'Minor', // was 'Low'
    createdAt: '2025-06-14T11:20:00Z',
    customer: 'Henry Thompson',
    assignedTo: 'Agent Mia',
    messages: [
      { sender: 'customer', content: 'It would be great to upload documents in tickets.' },
      { sender: 'agent', content: 'Thanks for the suggestion! We’ve noted it for review.' },
    ],
  },
  {
    id: '5',
    subject: 'Incorrect billing amount',
    status: 'Pending',
    priority: 'Urgent', // was 'High'
    createdAt: '2025-06-12T10:30:00Z',
    customer: 'Isabella Green',
    assignedTo: 'Agent Ron',
    messages: [
      { sender: 'customer', content: 'I was overcharged on my last invoice.' },
      { sender: 'agent', content: 'We’re verifying your billing history. Will update soon.' },
    ],
  },
  {
    id: '6',
    subject: 'Cannot reset password',
    status: 'Open',
    priority: 'Normal', 
    createdAt: '2025-06-14T13:50:00Z',
    customer: 'Jason Kim',
    assignedTo: 'Agent Mia',
    messages: [
      { sender: 'customer', content: 'The password reset link is not working.' },
      { sender: 'agent', content: 'I’ve sent a new link. Please check your email.' },
    ],
  },
];

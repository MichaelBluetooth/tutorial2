const MockUsers = [
  {
    "loginEmail": "quinn",
    "loginPwd": "mypwd",
    "accountStatus": "Active",
    "isAdminRole": "true",
    "isAuthorRole": "true",
    "isVoterRole": "true"
  },
  {
    "loginEmail": "admin",
    "loginPwd": "mypwd",
    "accountStatus": "Active",
    "isAdminRole": "true",
    "isAuthorRole": "false",
    "isVoterRole": "true"
  },
  {
    "loginEmail": "author",
    "loginPwd": "mypwd",
    "accountStatus": "Active",
    "isAdminRole": "false",
    "isAuthorRole": "true",
    "isVoterRole": "false"
  },
  {
    "loginEmail": "voter",
    "loginPwd": "mypwd",
    "accountStatus": "Active",
    "isAdminRole": "false",
    "isAuthorRole": "false",
    "isVoterRole": "true"
  },
  {
    "loginEmail": "guest@icsd.k12.ny.us",
    "loginPwd": "mypwd",
    "accountStatus": "Active",
    "isAdminRole": "false",
    "isAuthorRole": "false",
    "isVoterRole": "false"
  },
  {
    "loginEmail": "pending@icsd.k12.ny.us",
    "loginPwd": "mypwd",
    "accountStatus": "Pending",
    "isAdminRole": "false",
    "isAuthorRole": "false",
    "isVoterRole": "false"
  },
  {
    "loginEmail": "locked@icsd.k12.ny.us",
    "loginPwd": "mypwd",
    "accountStatus": "Locked",
    "isAdminRole": "false",
    "isAuthorRole": "false",
    "isVoterRole": "false"
  },
  {
    "loginEmail": "obsolete@icsd.k12.ny.us",
    "loginPwd": "mypwd",
    "accountStatus": "Obsolete",
    "isAdminRole": "false",
    "isAuthorRole": "false",
    "isVoterRole": "false"
  }
];

export { MockUsers };


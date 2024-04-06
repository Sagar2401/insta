const guestAccess = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL_ID;
  const password = process.env.NEXT_PUBLIC_TEST_PASS;
  console.log('email,password', email, password);
  return { email, password };
};

export default guestAccess;

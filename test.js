import React from 'react';

function HomePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
}
// Header and Footer component can be used in multiple app pages

function ContactUsPage() {
  return (
    <div>
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
}
function ContactYouPage() {
  return (
    <div>
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
}
function Them() {
  return (
    <div>
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
}

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
function ThemThereWhereAt() {
  return (
    <div>
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
}

function ThemThereWherAt() {
  return (
    <div>
      <Header2 />
      <ContactInfo />
      <Footer />
    </div>
  );
}

function ThemThereWhereAtTwo() {
  return (
    <div>
      <Header />
      <ContactInfoPages />
      <Footer />
    </div>
  );
}
function TheseTwo() {
  return (
    <div>
      <OnePage />
    </div>
  );
}

function TheseThreeFour() {
  return (
    <div>
      <OnePage />
      <TwoPage />
    </div>
  );
}

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

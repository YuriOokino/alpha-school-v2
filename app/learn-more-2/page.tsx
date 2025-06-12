"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LearnMorePage() {
  // Contact form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isParent, setIsParent] = useState("");
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);

  const schoolOptions = [
    "Alpha School Austin",
    "Alpha High School Austin",
    "Alpha New York City",
    "Alpha Scottsdale",
    "Alpha School Brownsville",
    "Alpha School Houston",
    "Alpha School Miami",
    "Alpha School Santa Barbara",
    "Alpha School Orlando",
    "Alpha School Palm Beach",
    "Alpha Fort Worth",
    "Alpha School Tampa",
  ];

  const handleSchoolChange = (school: string) => {
    setSelectedSchools((prev) =>
      prev.includes(school)
        ? prev.filter((s) => s !== school)
        : [...prev, school]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just log the values
    console.log({ firstName, lastName, email, phone, street, city, state, zip, isParent, selectedSchools, additionalInfo, consent });
  };

  return (
    <main>
      <section className="alpha-section">
        <h1 className="section-headline text-center mb-[var(--space-md)]">Learn More</h1>
        <p className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-[var(--space-lg)]">
          Discover more about Alpha School, our philosophy, and how we empower students to thrive in a modern world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-xl)] items-start">
          {/* Left column: main content placeholder */}
          <div>
            <Card className="bg-[#B9EDFF] text-[#111827] rounded-3xl p-10 flex flex-col gap-12 shadow-none border-0">
              {/* Admissions Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Admissions</h2>
                <p className="mb-8">Select your campus, submit your application, and take the first step toward providing your child with an education built for the future.</p>
                <Button className="alpha-btn-primary mb-4">Apply Now!</Button>
              </div>
              {/* Bring Alpha to your City Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Bring Alpha to your City</h2>
                <p className="mb-8">Interested in our new locations, starting a Micro School, or looking to see Alpha in your area? Be part of our movement to redefine education by bringing Alpha to new communities.</p>
                <Button className="alpha-btn-primary mb-4">Get in Touch</Button>
              </div>
              {/* Careers Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Careers</h2>
                <p className="mb-8">Thanks for your interest! All hiring is handled exclusively through Crossover. While we don't conduct casual interviews or respond directly to inquiries, we invite you to explore the exciting career opportunities available.</p>
                <Button className="alpha-btn-primary mb-4">Discover Careers</Button>
              </div>
              {/* Press Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Press</h2>
                <p className="mb-8 text-[#111827]">Interested in featuring Alpha School in your story or learning more about our innovative approach to education? We're happy to connect. <span className="font-bold">Media inquiries welcome.</span></p>
                <Button className="alpha-btn-primary mb-4">Contact Press</Button>
              </div>
              {/* Transcript/Test Scores Section */}
              <div>
                <p className="mb-2 text-[#111827]">Need to <span className="font-bold">request a transcript or test scores?</span></p>
                <p className="text-[#111827]">Email <span className="font-bold">registrar@alpha.school</span></p>
              </div>
            </Card>
          </div>
          {/* Right column: contact form */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="border rounded px-3 py-2 w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Street Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your street address"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">State</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your state"
                    value={state}
                    onChange={e => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">City</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Zip</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your zip code"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Are you a parent or guardian of a student?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isParent"
                      value="yes"
                      checked={isParent === "yes"}
                      onChange={() => setIsParent("yes")}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isParent"
                      value="no"
                      checked={isParent === "no"}
                      onChange={() => setIsParent("no")}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Which Alpha School location are you interested in?</label>
                <div>
                  {schoolOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedSchools.includes(option)}
                        onChange={() => handleSchoolChange(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block mb-1 font-medium">Additional Information/Questions?</label>
                <textarea
                  id="additionalInfo"
                  className="border rounded px-3 py-2 w-full min-h-[80px]"
                  value={additionalInfo}
                  onChange={e => setAdditionalInfo(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="consent"
                  type="checkbox"
                  className="mr-2"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                <label htmlFor="consent" className="text-sm">
                  I agree to receive SMS messages from Alpha. I am consenting to receive future autodialed, telemarketing text messages from Alpha. Msg & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 
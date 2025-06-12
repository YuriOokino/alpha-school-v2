"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import Link from "next/link";
import React from "react";

export default function AdmissionPage() {
  return (
    <div>
      <MainHeading
        description="Ready to get started? Here's everything you need to know about applying to Alpha School."
      >
        Applications are open!
      </MainHeading>
      <section className="alpha-section">
      </section>
    </div>
  );
}

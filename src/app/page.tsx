import React from "react";
import { Button } from "@/components/ui/button";
import { NextSeo } from "next-seo";
import { AvailableProjects } from "@/routes/home/available-projects";
import { UpcomingProjects } from "@/routes/home/upcoming-projects";
import { CompletedProjects } from "@/routes/home/completed-projects";

export const metadata = {
  title: "ReDAO Launchpad - Pioneering IDO Platform for Crypto Innovators",
  description:
    "Join ReDAO Launchpad, the premier platform for launching and participating in Initial DEX Offerings (IDOs). Connect with groundbreaking crypto projects and be part of the financial revolution.",
  image: "https://example.com/launchpad-image.jpg",
  url: "https://www.redaolaunchpad.com",
  twitterCard: "summary_large_image",
  twitterSite: "@ReDAOLaunchpad",
  twitterCreator: "@ReDAOLaunchpad",
  facebookAppId: "YOUR_FACEBOOK_APP_ID",
};

export default function Home() {
  return (
    <>
      <div>
        <AvailableProjects />
        <UpcomingProjects />
        <CompletedProjects />
      </div>
    </>
  );
}

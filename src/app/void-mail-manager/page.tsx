"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const VoidmailGuide = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Voidmail Manager — Quick Guide</h1>
          <p className="text-muted-foreground">Getting started and everyday usage</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Voidmail Manager is an all-in-one email client that lets you manage multiple mail accounts in one place. It connects
              through your existing browser login — no need to type your email password inside the app. Once you&apos;ve approved access,
              it syncs your mail, folders, and messages so you can read, organize, and reply from a single interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. First run &amp; setup</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
              <li>Open Voidmail Manager.</li>
              <li>You&apos;ll be asked to add your email account.</li>
              <li>
                When prompted, the app will open a secure browser window or tab showing your mail provider&apos;s sign-in page.
              </li>
              <li>
                If you&apos;re already logged into that account in the browser, you&apos;ll just confirm permission. If not, sign in normally on
                the provider&apos;s page.
              </li>
              <li>After you confirm, the window closes automatically and your account appears in the app.</li>
              <li>The app begins syncing your inbox and folders — you can start using it right away.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How authentication works (simple explanation)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Voidmail Manager does not store or request your password directly. It uses the existing session from your browser — you
              simply approve the connection when prompted. After approval, the app keeps a secure token locally so you stay signed in
              until the provider asks to re-confirm. You&apos;ll only need to re-authenticate if your provider expires the session or you
              manually sign out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Managing mail</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Inbox: read, reply, forward, or delete messages as you would in any mail app.</li>
              <li>
                Compose: click New Message, enter recipients, subject, and body, attach files, and press Send.
              </li>
              <li>Folders: expand the folder list to browse Sent, Drafts, Trash, or custom folders.</li>
              <li>Search: type any keyword to find messages by subject, sender, or text content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Profiles &amp; accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can group accounts into separate profiles (for example, Work or Personal). Each profile remembers its own layout and
              sync schedule. Switch profiles anytime from the top-left menu without affecting others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Sync &amp; offline access</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mail syncs automatically at regular intervals. Messages already synced remain readable offline. Any messages you draft
              while offline are sent automatically once you reconnect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Attachments</h2>
            <p className="text-muted-foreground leading-relaxed">
              Attachments appear below the subject line of a message. Click to open or save them. To attach a file to a new message,
              click the paperclip icon or drag a file into the window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Notifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Enable desktop notifications to get alerts for new messages. You can mute notifications per profile or set quiet hours if
              desired.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Troubleshooting</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                Sign-in window doesn&apos;t appear: make sure your browser allows pop-ups for Voidmail Manager.
              </li>
              <li>
                Account won&apos;t connect: check that you&apos;re signed in to the right account in the browser, then retry.
              </li>
              <li>
                No new mail: verify that you&apos;re online; if still stuck, sign out and sign back in, or remove and re-add the account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Validated email addresses are not permanently stored. We retain usage analytics, account information, and any data needed
              to provide the service for as long as your account is active or as required to comply with legal obligations. OAuth tokens
              are retained only as long as necessary to provide the connected services and may be revoked by you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use third-party services for Google APIs (when you connect an account), payment processing, and analytics. These services
              have their own privacy policies; we ensure they meet our data protection standards and limit the information we share to what
              is necessary to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, or need help revoking access or deleting data, contact support email support@fitsii.com or admin@voidbounce.com.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="glow" size="lg">
              Start Validating Emails
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoidmailGuide;

 

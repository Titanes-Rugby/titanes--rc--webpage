import { contactChannels } from './contact.data';
import ContactChannels from './components/ContactChannels';
import ContactFormCard from './components/ContactFormCard';
import ContactHero from './components/ContactHero';
import SocialCTA from './components/SocialCTA';

const ContactPage = () => {
  return (
    <main className="bg-primary-50 min-h-screen">
      <ContactHero />
      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
        <SocialCTA />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ContactChannels channels={contactChannels} />
          <ContactFormCard />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

import { contactChannels } from './contact.data';
import ContactChannels from './components/ContactChannels';
import ContactFormCard from './components/ContactFormCard';
import ContactHero from './components/ContactHero';

const ContactPage = () => {
  return (
    <main className="bg-titanes-50 min-h-screen">
      <ContactHero />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ContactChannels channels={contactChannels} />
        <ContactFormCard />
      </section>
    </main>
  );
};

export default ContactPage;

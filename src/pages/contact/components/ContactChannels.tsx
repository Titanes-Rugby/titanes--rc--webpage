import type { ContactChannel } from '../types';

type ContactChannelsProps = {
  channels: ContactChannel[];
};

const ContactChannels = ({ channels }: ContactChannelsProps) => {
  return (
    <div className="space-y-3">
      {channels.map((channel) => (
        <article key={channel.id} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">{channel.label}</p>
          <a href={channel.href} target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-primary-900 hover:underline">
            {channel.value}
          </a>
          <p className="mt-1 text-sm text-primary-700">{channel.note}</p>
        </article>
      ))}
    </div>
  );
};

export default ContactChannels;

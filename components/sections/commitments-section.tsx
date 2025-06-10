import CommitmentCard from "@/components/features/commitment-card";

export default function CommitmentsSection() {
  return (
    <section className="alpha-section bg-white">
      <h2 className="section-headline text-center text-[#111827] mb-[var(--space-lg)]">Alpha's 3 Commitments</h2>
      <div className="w-full bg-[#0000ED] rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-lg)] justify-between items-stretch">
        <CommitmentCard
          title="Love School"
          description="Alpha students love school – it's engaging, inspiring, and built for them."
          buttonText="Learn more"
          buttonHref="#"
        />
        <CommitmentCard
          title="Learn 2x in 2 Hours"
          description="Alpha students learn twice as fast as their peers and rank in the top 1% nationwide."
          buttonText="Button"
          buttonHref="#"
        />
        <CommitmentCard
          title="Learn Life Skills"
          description="Alpha students spend afternoons developing life skills and exploring their personas."
          buttonText="Button"
          buttonHref="#"
        />
      </div>
    </section>
  );
} 
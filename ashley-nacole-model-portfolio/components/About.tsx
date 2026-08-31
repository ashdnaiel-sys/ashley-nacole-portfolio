import { modelData } from '@/data/modelData';

const biography = [
  'Ashley Nacole is a Texas-based model with experience in commercial, runway, beauty, lifestyle, fashion, e-commerce, skin, hair, swim, and fitness modeling.',
  'Ashley also brings natural movement ability to fitness and wellness work, with experience in yoga, Pilates, boxing, running, and general athletics.',
  'Her Mother Agency is the Neal Hamil Agency based in Texas, Ashley is available for bookings, agency meetings, travel, and temporary placement in additional U.S. and international markets.',
] as const;

export function About() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">Professional Background</p>
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-copy">
        {biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="specialties" aria-labelledby="specialties-title">
        <div>
          <h3 id="specialties-title">Selected Experience & Specialties</h3>
          <ul>{modelData.specialties.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3>Athletic Skills</h3>
          <ul>{modelData.athleticSkills.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

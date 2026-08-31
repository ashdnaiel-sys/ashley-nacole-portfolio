import { modelData } from '@/data/modelData';

export function About() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">Professional Background</p>
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-copy">
        {modelData.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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

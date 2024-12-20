import { useState } from "react";
import './AboutUs.css';

export default function AboutUs() {
  const [teamMembers] = useState([
    { name: "Rounok Rabbi", image: "https://www.pngitem.com/pimgs/m/520-5204566_null-workers-icon-png-transparent-png.png" },
    { name: "Saleheen Ferdous", image: "https://www.pngitem.com/pimgs/m/520-5204566_null-workers-icon-png-transparent-png.png" },
    { name: "Muhit Chowdhury", image: "https://www.pngitem.com/pimgs/m/520-5204566_null-workers-icon-png-transparent-png.png" }
  ]);

  return (
    <section className="about-us">
      <h2>About Us</h2>
      
      <section className="mission">
        <h3>Our Mission</h3>
        <p>
        Our goal is to assist cats to find their permanent homes by giving them a loving and caring environment.
        Adoption, education, and animal welfare are our top priorities.
        </p>
      </section>

      <section className="history">
        <h3>Our History</h3>
        <p>
        Our initial objective was to ensure an easy and satisfying cat adoption process. 
        We have started our journey from rehoming street cats and feeding them from our pocket money.
        We have successfully adopted, cared for, and rescued countless cats throughout the years to give them a better life.
        Now we dream to ensure security for all breeds of cats.
        </p>
      </section>

      <section className="team">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          <ol>
            {teamMembers.map((member, index) => (
              <li key={index} className="team-member">
                <div className="image-box">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-name">{member.name}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import PageLayout, { cardVariants } from './PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout title="About Me" subtitle="Get to know">
      <section id="about" className="about-section">
        <motion.div
          className="about-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >
          <div className="about-card-content">
            <div className="about-description">
              <p>
                I'm Khushi Naik, a recent MS CS graduate from USC who thrives on building thoughtful products at the edge of computer vision, machine learning, and clear user experience. I'm especially drawn to biotech and healthcare, where smart software can genuinely lighten someone's day. My goal is to keep learning the science behind these fields while sharpening my engineering craft so I can contribute to tools that help patients and clinicians work with more confidence and less friction.
              </p>
              <p>
                When the laptop closes, my life shifts gears:
              </p>
              <ul>
                <li>Dance fills my evenings with hip hop footwork and Bollywood choreography.</li>
                <li>Painting lets me slow down, mix new colors, and watch a blank canvas turn into something expressive.</li>
                <li>Adventure parks offer the thrill of a sudden drop, while long mountain hikes reset my perspective and spark fresh ideas.</li>
                <li>I love sharing playlists, trying street food in new cities, and reading memoirs that show how people overcome challenges.</li>
              </ul>
              <p>
                Curiosity guides everything I do, whether I'm debugging code, learning a new dance routine, or exploring a forest trail. I bring that same energy into every project and partnership, always aiming to create work that is useful, welcoming, and a little more human.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default About; 
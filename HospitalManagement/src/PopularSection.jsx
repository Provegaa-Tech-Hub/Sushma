import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ArticlesFaq = () => {
  const [activeId, setActiveId] = useState(null);

  const articlesData = [
    {
      id: 1,
      category: "Business",
      date: "July 10, 2018",
      title: "Thousands of Patients Referred to Substance Use Treatment",
      image: "./images/articles-3-3.jpg",
    },
    {
      id: 2,
      category: "Lifestyle",
      date: "April 04, 2018",
      title: "MedStar Health Bel Air Cancer Services Aligns Expertise",
      image: "/images/articles-3-2.jpg",
    },
    {
      id: 3,
      category: "Experience",
      date: "February 20, 2018",
      title: "Dr. Gabriel Del Corral Joins MedStar Plastic & Reconstructive Surgery",
      image: "/images/articles-3-1.jpg",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What causes tooth decay?",
      answer:
        "Decay is caused by bacteria that collect on teeth and feed on the carbohydrates in our diet. The bacteria produce acid that wears away at the enamel on our teeth. If decay is left untreated, it can cause pain, infection and even tooth loss. Protect your teeth against decay by brushing at least twice a day, flossing daily, visiting your dentist regularly.",
    },
    {
      id: 2,
      question: "What is dry mouth and what can I do about it?",
      answer:
        "Decay is caused by bacteria that collect on teeth and feed on the carbohydrates in our diet. The bacteria produce acid that wears away at the enamel on our teeth. If decay is left untreated, it can cause pain, infection and even tooth loss. Protect your teeth against decay by brushing at least twice a day, flossing daily, visiting your dentist regularly.",
    },
    {
      id: 3,
      question: "How often should I change my toothbrush?",
      answer:
        "Decay is caused by bacteria that collect on teeth and feed on the carbohydrates in our diet. The bacteria produce acid that wears away at the enamel on our teeth. If decay is left untreated, it can cause pain, infection and even tooth loss. Protect your teeth against decay by brushing at least twice a day, flossing daily, visiting your dentist regularly.",
    },
    {
      id: 4,
      question: "How often should I see a dentist?",
      answer:
        "Decay is caused by bacteria that collect on teeth and feed on the carbohydrates in our diet. The bacteria produce acid that wears away at the enamel on our teeth. If decay is left untreated, it can cause pain, infection and even tooth loss. Protect your teeth against decay by brushing at least twice a day, flossing daily, visiting your dentist regularly.",
    },
  ];

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="articles-faq-section">
      <div className="container">
        <div className="row1">
          <div className="articles-column">
            <h2>
              POPULAR <span>ARTICLES</span>
            </h2>

            {articlesData.map((article) => (
              <div className="article-card" key={article.id}>
                <img src={article.image} alt={article.title} />

                <div className="article-content">
                  <p>
                    <strong>{article.category}</strong> . {article.date}
                  </p>

                  <h3>{article.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="faq-column">
            <h2>
              MEDICAL <span>FAQS</span>
            </h2>

            {faqData.map((faq) => (
              <div className="faq-item" key={faq.id}>
                <div
                  className="faq-header"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3>{faq.question}</h3>

                  {activeId === faq.id ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </div>

                {activeId === faq.id && (
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesFaq;
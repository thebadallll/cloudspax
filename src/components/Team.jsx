import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Badal Vishwakarma',
      role: 'Founder',
      avatar: 'B',
      description: 'Badal Vishwakarma, founder of CloudSpax, leads outreach and client acquisition. With an MCA background, he excels at identifying opportunities and connecting with clients. Under his leadership, CloudSpax has grown steadily, delivering top-quality digital services.',
      social: {
        instagram: 'https://www.instagram.com/thebadall/',
        linkedin: 'https://www.linkedin.com/in/badal-vishwakarma-a474a91b1/'
      }
    },
    {
      id: 2,
      name: 'Vishal Jatav',
      role: 'Founder',
      avatar: 'V',
      description: 'Vishal, founder of CloudSpax, ensures seamless service delivery. With an MCA degree, he brings technical expertise and precision to projects. Over the past year, his focus on quality and client satisfaction has strengthened CloudSpax\'s reputation for delivering exceptional results.',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Dibendu Das',
      role: 'Senior Long Form Video Editor',
      avatar: 'D',
      description: 'Dibendu das is a senior long form video editor at CloudSpax, leads creative execution. With sharp editing skills, he blends storytelling and precision. Over the past year, his focus on quality content has enhanced CloudSpax\'s reputation for delivering standout visuals.',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Jaspreet Singh',
      role: 'Youtube Thumbnail Designer',
      avatar: 'J',
      description: 'Jaspreet is a skilled YouTube thumbnail designer at CloudSpax, leading the creative visual branding. With sharp design skills, he blends eye-catching appeal with brand consistency. His focus on quality thumbnails has elevated CloudSpax\'s reputation for standout visuals.',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Muhammad Moustafa',
      role: 'Senior Short Form Video Editor',
      avatar: 'M',
      description: 'Mustafa das is a senior Short form video editor at CloudSpax, leads creative execution. With sharp editing skills, he blends storytelling and precision. Over the past year, his focus on quality content has enhanced CloudSpax\'s reputation for delivering standout visuals.',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Tarun Soni',
      role: 'Lead Generation Expert',
      avatar: 'T',
      description: 'Taarun handles lead generation at CloudSpax, driving business growth by connecting with the right clients. Through targeted outreach and strategic communication, he plays a key role in expanding CloudSpax\'s reach and ensuring a steady pipeline of qualified leads.',
      social: {
        linkedin: '#'
      }
    }
  ]

  const generateAvatarColor = (index) => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="section-header text-center">
          <h2>MEET OUR TEAM</h2>
          <p>The creative minds behind CloudSpax's success</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="team-card">
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div 
                    className="member-avatar"
                    style={{ background: generateAvatarColor(index) }}
                  >
                    {member.avatar}
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
                
                <div className="team-card-back">
                  <div className="member-description">
                    <p>{member.description}</p>
                  </div>
                  
                  <div className="member-social">
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta text-center">
          <h3>TAKE ACTION TODAY</h3>
          <p>Feel free to discuss your content strategy.</p>
          <a href="#contact" className="btn btn-primary btn-large">
            Book a discovery Call (it's free)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team

import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Education } from '../models/education.model';
import { Skill, SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getExperiences(): Experience[] {
    return [
      {
        id: '1',
        title: 'Embedded Lead',
        company: 'McMaster Exoskeleton',
        location: 'Hamilton, ON',
        startDate: '2024',
        endDate: 'Present',
        type: 'leadership',
        summary: 'Overseeing embedded system design and programming for exoskeleton, integrating IMU and motor APIs. Improved code efficiency and reliability for real-world testing and competition.',
        achievements: [
          'Lead embedded firmware, sensor and motor integration.',
          'Improved system reliability and code efficiency.',
        ],
        technologies: ['C++', 'Embedded Systems', 'IMU Sensors', 'Motor Control'],
        image: 'img/exoWiring.JPG',
        link: 'https://www.macexo.com/'
      },
      {
        id: '2',
        title: 'Systems Engineer',
        company: 'Accipiter Radar',
        location: 'Fonthill, ON',
        startDate: '2024',
        endDate: 'Present',
        type: 'co-op',
        summary: 'Developed internal web tools using Angular, Go/Python, and PostgreSQL for improving and automating processes. These projects were driven by applied research and design reviews with the software department. I also worked on redesigning an existing radar system being involved in the software, hardware, and mechanical improvement cycles.',
        achievements: [
          'Redesigned customer portal page in angular to match company branding.',
          'Created user management tool improving authentication processes by up to 75%.',
        ],
        technologies: ['Angular', 'Go', 'Python', 'PostgreSQL', 'Web Development'],
        image: 'img/accipiterCoops.jpg',
        link: 'https://www.accipiterradar.com/'
      },
      {
        id: '3',
        title: 'Control Systems Lead',
        company: 'McMaster Exoskeleton',
        location: 'Hamilton, ON',
        startDate: '2023',
        endDate: '2024',
        type: 'leadership',
        summary: 'Led a team of engineers in designing and implementing a lower-limb exoskeleton\'s controls integration and simulation. Managed project planning, task delegation, and hands-on mentorship for competition success.',
        achievements: [
          'Developed and deployed C++/Python controls on embedded hardware.',
          'Placed 5th overall at ACE 2025.',
        ],
        technologies: ['C++', 'Python', 'Control Systems', 'Simulink', 'Embedded Systems'],
        image: 'img/exoSuits.jpg',
        link: 'https://www.macexo.com/'
      },
      {
        id: '4',
        title: 'Quality Engineer',
        company: 'Accipiter Radar',
        location: 'Fonthill, ON',
        startDate: '2023',
        endDate: '2024',
        type: 'co-op',
        summary: 'Maintained QMS documentation and coordinated cross-functional teams to ensure compliance and process improvement. Delivered company-wide quality training and created corresponding records.',
        achievements: [
          'Used Microsoft Office tools to write and manage QMS documents and workflows.',
          'Led quality training and supported ISO 9001 audit success and certification.',
        ],
        technologies: ['Quality Management', 'ISO 9001', 'Process Improvement'],
        image: 'img/accipiterGroup.jpg',
        link: 'https://www.accipiterradar.com/'
      },
      {
        id: '5',
        title: 'Manufacturing Team Member',
        company: 'McMaster Rocketry',
        location: 'Hamilton, ON',
        startDate: '2022',
        endDate: '2023',
        type: 'volunteer',
        summary: 'Contributed to composite layup process improvements and custom tooling design for a student rocketry team. Collaborated with avionics and propulsion teams to refine structural designs for manufacturability.',
        achievements: [
          'Improved strength-to-weight ratio and assembly consistency.',
          'Designed jigs and collaborated on structural refinement.',
        ],
        technologies: ['SOLIDWORKS', 'Composite Materials', 'Manufacturing'],
        image: 'img/rocketry.jpg',
        link: 'https://www.macrocketry.ca/'
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'SNOOPI',
        description: 'Implemented Python-based ROS 2 autonomy for a Unitree Go2 quadruped, combining LiDAR, vision, and real-time control to support safe navigation in human-centered settings.',
        image: 'img/snoopi.jpg',
        technologies: ['ROS', 'Python', 'System Design', 'Embedded'],
        tags: [
          { name: 'Robotics', color: '#3B82F6', textColor: '#fff' },
        ],
        category: 'robotics',
        featured: false
      },
      {
        id: '2',
        title: 'TraceAI',
        description: 'Built a Python processing pipeline and TypeScript VS Code extension to annotate AI-generated code with prompt provenance, linking AI discussions to pull requests for transparent, auditable workflows.',
        image: 'img/traceai.jpg',
        technologies: ['TypeScript', 'Python', 'OpenAI'],
        tags: [
          { name: 'Software', color: '#3B82F6', textColor: '#fff' },
        ],
        github: 'https://github.com/umarkhan135/TraceAI',
        live: 'https://devpost.com/software/traceai',
        category: 'software',
        featured: false
      },
      {
        id: '3',
        title: 'ChessMate',
        description: 'Created a hybrid physical-digital chess system with Python vision, AI coaching, and real-time control of a dual-axis gantry, combining perception, planning, and UI to enhance gameplay.',
        image: 'img/chessmate.png',
        technologies: ['Python', 'Arduino', 'Stepper Motors'],
        tags: [
          { name: 'Robotics', color: '#3B82F6', textColor: '#fff' },
        ],
        live: 'https://devpost.com/software/chessmate-nwygvq',
        category: 'robotics',
        featured: false
      },
      {
        id: '4',
        title: 'Credit Card Classifier',
        description: 'Implemented a credit score classification pipeline using scikit-learn and PyTorch, comparing SVM, neural network, and random forest models on structured financial data.',
        image: 'img/ccc.png',
        technologies: ['Python', 'Scikit-learn', 'PyTorch'],
        tags: [
          { name: 'Software', color: '#3B82F6', textColor: '#fff' },
        ],
        category: 'software',
        featured: false
      },
      {
        id: '5',
        title: 'Portfolio',
        description: 'Engineering portfolio showcasing software and robotics projects, deployed using Angular and Vercel.',
        image: 'img/myWebsite.png',
        technologies: ['Angular', 'TypeScript', 'SCSS'],
        tags: [
          { name: 'Web', color: '#3B82F6', textColor: '#fff' },
        ],
        github: 'https://github.com/JuanR-Git/my-portfolio',
        category: 'web',
        featured: false
      },
      {
        id: '6',
        title: 'Paced',
        description: 'Built a real-time pacemaker control system using Simulink, establishing serial communication between embedded hardware and a frontend application for monitoring and configuring pacing behavior.',
        image: 'img/paced.png',
        technologies: ['Simulink', 'Python', 'Embedded'],
        tags: [
          { name: 'Embedded', color: '#3B82F6', textColor: '#fff' },
        ],
        docs: 'https://drive.google.com/file/d/1ZIhKlqEDUXXbrAUTR-R1dYmR0VYDw45Z/view?usp=sharing',
        category: 'embedded',
        featured: false
      },
      {
        id: '7',
        title: 'Recycle Bot',
        description: 'Developed a Python-based simulation of an automated recycling sorter as a first-year engineering project, testing control logic and system behavior in a virtual environment.',
        image: 'img/recycleBot.png',
        technologies: ['Python', 'OpenCV', 'Robotics'],
        tags: [
          { name: 'Robotics', color: '#3B82F6', textColor: '#fff' },
        ],
        github: 'https://github.com/JuanR-Git/Recycle-Bot',
        category: 'robotics',
        featured: false
      },
      {
        id: '8',
        title: 'Student Number Display',
        description: 'Built an embedded digital logic circuit using JK flip-flops and clocked state transitions to control a 7-segment display showing a multi-digit student number in sequence.',
        image: 'img/sevenseg.jpg',
        technologies: ['Digital Logic', 'JK Flip-Flops', 'Verilog'],
        tags: [
          { name: 'Embedded', color: '#3B82F6', textColor: '#fff' },
        ],
        category: 'embedded',
        featured: false
      },
      {
        id: '9',
        title: 'Wary',
        description: 'Developed a React-based web interface for anonymous reporting and discussion, implementing keyword grouping and upvote mechanisms to surface shared community safety concerns.',
        image: 'img/wary.png',
        technologies: ['React', 'Node.js', 'MongoDB'],
        tags: [
          { name: 'Web', color: '#3B82F6', textColor: '#fff' },
        ],
        github: 'https://github.com/JuanR-Git/Wary',
        category: 'web',
        featured: false
      },
    ];
  }

  getSkills(): SkillCategory[] {
    return [
      {
        name: 'Programming Languages',
        skills: [
          { name: 'Python', category: 'languages', proficiency: 'advanced', image: 'img/python.png' },
          { name: 'C++', category: 'languages', proficiency: 'advanced', image: 'img/cPlusPlus.png' },
          { name: 'TypeScript', category: 'languages', proficiency: 'advanced', image: 'img/javaScript.png' },
          { name: 'Go', category: 'languages', proficiency: 'intermediate', image: 'img/googleGo.png' },
          { name: 'MATLAB', category: 'languages', proficiency: 'advanced', image: 'img/matLab.png' },
        ]
      },
      {
        name: 'Frameworks & Libraries',
        skills: [
          { name: 'Angular', category: 'frameworks', proficiency: 'advanced', image: 'img/angular.gif' },
          { name: 'React', category: 'frameworks', proficiency: 'intermediate' },
        ]
      },
      {
        name: 'Tools & Technologies',
        skills: [
          { name: 'Linux', category: 'tools', proficiency: 'advanced', image: 'img/linux.png' },
          { name: 'PostgreSQL', category: 'technologies', proficiency: 'intermediate', image: 'img/postgreSQL.png' },
          { name: 'Raspberry Pi', category: 'technologies', proficiency: 'advanced', image: 'img/raspberryPi.png' },
          { name: 'Simulink', category: 'software', proficiency: 'advanced', image: 'img/simulink.png' },
          { name: 'SOLIDWORKS', category: 'software', proficiency: 'intermediate', image: 'img/solidWorks.png' },
        ]
      }
    ];
  }
}

export const bio = {
  bio: "I am a Product Builder, I make software systems and useful products. A crypto nerd, software engineer, data scientist turned product manager with bias for shipping. I build new products with people and technology. Experienced in R&D, experimental design & development with emerging technologies in both business and academic environments. Leadership roles in machine learning, append only crypto ledgers and product management."
}



export const jobs = [
  { 
    id: 1,title: 'DeFi Product Manager', 
    company: 'Pluto Digital', 
    URL: "https://plutodigital.com/", 
    jobSummary: '',
    dates: 'Nov 2021 - present'
  },
  {
    id: 2,
    title: "Product Development Lead", 
    company: 'Citigroup', URL: "https://icg.citi.com/icghome", 
    jobSummary:'',
    dates: 'Nov 2019 - Nov 2021'
  },
  {
    id: 3,
    title: "Disruptive Technologies Lead", 
    company: 'Citigroup', 
    URL: "https://icg.citi.com/icghome", 
    jobSummary:'',
    dates: 'Jun 2017 - Nov-2019'
  },
  {
    id: 4,title: "Cryptocurrency Engineer", 
    company: 'Citigroup', 
    URL: "https://icg.citi.com/icghome", 
    jobSummary:'',
    dates: 'Aug 2015 - June 2017'
  },
];

export const study = [
  {
    id: 1,
    title: 'International fellow',
    school: 'fast.ai',
    dates: 'March 2018 - March 2019',
    URL: 'https://www.fast.ai/'
  },
  {
    id: 2,
    title: 'Certificate in Disruptive Strategy, Innovation Strategy Formulation and Execution',
    school: 'Harvard Business School Online',
    dates: 'July 2017'
  },
  {
    id: 3,
    title: 'MSc. Mobile and Ubiquitous Computing (Computer Science)',
    school: 'Trinity College Dublin',
    dates: 'August 2014- August 2015',
    URL: 'https://www.tcd.ie/'
  },
  {
    id: 4,
    title: 'Electronics and Communications Engineering',
    school: 'Indian Institue of Information Technology',
    dates: 'August 2010 - March 2014',
    URL: 'https://www.iiitdmj.ac.in/'
  }
];

export const publications = [{
  id: 1,
  title: 'Performance of swarm based optimization techniques for designing digital FIR filter: A comparative study',
  summary: 'In this paper, a linear phase FIR filter is designed through recently proposed nature inspired optimization algorithm known as Cuckoo search (CS). A comparative study of Cuckoo search (CS), particle swarm optimization (PSO) and artificial bee colony (ABC) nature inspired optimization methods in the field of linear phase FIR filter design is also presented. For this purpose, an improved L1 weighted error function is formulated in frequency domain, and minimized through CS, PSO and ABC respectively. The error or objective function has a controlling parameter wt which controls the amount of ripple in the desired band of frequency. The performance of FIR filter is examined through three key parameters; Maximum Pass Band Ripple (MPR), Maximum Stopband Ripple (MSR) and Stopband Attenuation (As). Comparative study and the simulation results reveal that the designed filter with CS gives better performance in terms of Maximum Stopband Ripple (MSR), and Stopband Attenuation (As) for low order filter design, and for higher order it also gives better performance in term of Maximum Passband Ripple (MPR). Superiority of the proposed technique is also shown through comparison with other recently proposed methods.',
  URL: 'https://www.sciencedirect.com/science/article/pii/S2215098615303785',
  date: 'September 2016'
},
{
  id: 2,
  title: 'Design of two-channel filter bank using nature inspired optimization based fractional derivative constraints',
  summary: 'In this article, a novel approach for 2-channel linear phase quadrature mirror filter (QMF) bank design based on a hybrid of gradient based optimization and optimization of fractional derivative constraints is introduced. For the purpose of this work, recently proposed nature inspired optimization techniques such as cuckoo search (CS), modified cuckoo search (MCS) and wind driven optimization (WDO) are explored for the design of QMF bank. 2-Channel QMF is also designed with particle swarm optimization (PSO) and artificial bee colony (ABC) nature inspired optimization techniques. The design problem is formulated in frequency domain as sum of L2 norm of error in passband, stopband and transition band at quadrature frequency. The contribution of this work is the novel hybrid combination of gradient based optimization (Lagrange multiplier method) and nature inspired optimization (CS, MCS, WDO, PSO and ABC) and its usage for optimizing the design problem. Performance of the proposed method is evaluated by passband error (ϕp), stopband error (ϕs), transition band error (ϕt), peak reconstruction error (PRE), stopband attenuation (As) and computational time. The design examples illustrate the ingenuity of the proposed method. Results are also compared with the other existing algorithms, and it was found that the proposed method gives best result in terms of peak reconstruction error and transition band error while it is comparable in terms of passband and stopband error. Results show that the proposed method is successful for both lower and higher order 2-channel QMF bank design. A comparative study of various nature inspired optimization techniques is also presented, and the study singles out CS as a best QMF optimization technique.',
  URL: 'https://www.sciencedirect.com/science/article/abs/pii/S0019057814001256?via%3Dihub',
  date: 'January 2015'
},
{
  id: 3,
  title: "Cuckoo search algorithm and wind driven optimization based study of satellite image segmentation for multilevel thresholding using Kapur's entropy",
  summary: 'The objective of image segmentation is to extract meaningful objects. A meaningful segmentation selects the proper threshold values to optimize a criterion using entropy. The conventional multilevel thresholding methods are efficient for bi-level thresholding. However, they are computationally expensive when extended to multilevel thresholding since they exhaustively search the optimal thresholds to optimize the objective functions. To overcome this problem, two successful swarm-intelligence-based global optimization algorithms, cuckoo search (CS) algorithm and wind driven optimization (WDO) for multilevel thresholding using Kapur’s entropy has been employed. For this purpose, best solution as fitness function is achieved through CS and WDO algorithm using Kapur’s entropy for optimal multilevel thresholding. A new approach of CS and WDO algorithm is used for selection of optimal threshold value. This algorithm is used to obtain the best solution or best fitness value from the initial random threshold values, and to evaluate the quality of a solution, correlation function is used. Experimental results have been examined on standard set of satellite images using various numbers of thresholds. The results based on Kapur’s entropy reveal that CS, ELR-CS and WDO method can be accurately and efficiently used in multilevel thresholding problem.',
  date: 'June 2014',
  URL: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417413008919'
}
];

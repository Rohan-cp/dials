import Article from "../models/Article";

export default data = [new Article(
    "a1",
    "Natalise Wolchver",
    {
      name: "Astrophysics",
      color: 'rgba(53, 67, 255, 0.7)',
    },
    Date(),
    `In the 1930s, the French physicist Pierre Auger placed Geiger counters along a ridge in the Alps and observed that they would sometimes spontaneously click at the same time, even when they were up to 300 meters apart. He knew that the coincident clicks came from cosmic rays, charged particles from space that bang into air molecules in the sky, triggering particle showers that rain down to the ground. But Auger realized that for cosmic rays to trigger the kind of enormous showers he was seeing, they must carry fantastical amounts of energy — so much that, he wrote in 1939, “it is actually impossible to imagine a single process able to give to a particle such an energy.”

    Upon constructing larger arrays of Geiger counters and other kinds of detectors, physicists learned that cosmic rays reach energies at least 100,000 times higher than Auger supposed.
    
    A cosmic ray is just an atomic nucleus — a proton or a cluster of protons and neutrons. Yet the rare ones known as “ultrahigh-energy” cosmic rays have as much energy as professionally served tennis balls. They’re millions of times more energetic than the protons that hurtle around the circular tunnel of the Large Hadron Collider in Europe at 99.9999991% of the speed of light. In fact, the most energetic cosmic ray ever detected, nicknamed the “Oh-My-God particle,” struck the sky in 1991 going something like 99.99999999999999999999951% of the speed of light, giving it roughly the energy of a bowling ball dropped from shoulder height onto a toe. “You would have to build a collider as large as the orbit of the planet Mercury to accelerate protons to the energies we see,” said Ralph Engel, an astrophysicist at the Karlsruhe Institute of Technology in Germany and the co-leader of the world’s largest cosmic-ray observatory, the Pierre Auger Observatory in Argentina.
    
    The question is: What’s out there in space doing the accelerating?`,
    'https://www.quantamagazine.org/cosmic-map-of-ultrahigh-energy-particles-points-to-long-hidden-treasures-20210427',
    "https://imgur.com/Z1cPpmL.png",
    "Cosmic Map of Ultrahigh-Energy Particles Points to Long-Hidden Treasures"
  ),
  new Article(
    "a2",
    "Aatish Bhatia",
    {
      name: "Math",
      color: 'rgba(112,128,144,0.6)',
    },
    Date(),
    `On 13 June 1944, a week after the allied invasion of Normandy, a loud buzzing sound rattled through the skies of battle-worn London. The source of the sound was a newly developed German instrument of war, the V-1 flying bomb. A precursor to the cruise missile, the V-1 was a self-propelled flying bomb, guided using gyroscopes, and powered by a simple pulse jet engine that gulped air and ignited fuel 50 times a second. This high frequency pulsing gave the bomb its characteristic sound, earning them the nickname buzzbombs.

    From June to October 1944, the Germans launched 9,521 buzzbombs from the coasts of France and the Netherlands, of which 2,419 reached their targets in London. The British worried about the accuracy of these aerial drones. Were they falling haphazardly over the city, or were they hitting their intended targets? Had the Germans really worked out how to make an accurately targeting self-guided bomb?
    
    Fortunately, they were scrupulous in maintaining a bomb census, that tracked the place and time of nearly every bomb that was dropped on London during World War II. With this data, they could statistically ask whether the bombs were falling randomly over London, or whether they were targeted. This was a math question with very real consequences.
    
    Imagine, for a moment, that you are working for the British intelligence, and you’re tasked with solving this problem. Someone hands you a piece of paper with a cloud of points on it, and your job is to figure out if the pattern is random.
    
    Let’s make this more concrete. Here are two patterns, from Steven Pinker’s book, The Better Angels of our Nature. One of the patterns is randomly generated. The other imitates a pattern from nature. Can you tell which is which?`,
    'https://abakcus.com/article/what-does-randomness-look-like/',
    "https://imgur.com/QT4mi1c.png",
    "What Does Randomness Look Like?"
  ),
  new Article(
    "a21",
    "Eric Broug",
    {
      name: "Design",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `In Islamic culture, geometry is everywhere. You can find it in mosques, madrasas, palaces and private homes. This tradition began in the 8th century CE during the early history of Islam, when craftsmen took preexisting motifs from Roman and Persian cultures and developed them into new forms of visual expression. 

    This period of history was a golden age of Islamic culture, during which many achievements of previous civilizations were preserved and further developed, resulting in fundamental advancements in scientific study and mathematics. Accompanying this was an increasingly sophisticated use of abstraction and complex geometry in Islamic art, from intricate floral motifs adorning carpets and textiles, to patterns of tile work that seemed to repeat infinitely, inspiring wonder and contemplation of eternal order.
    
    Despite the remarkable complexity of these designs, they can be created with just a compass to draw circles and a ruler to make lines within them, and from these simple tools emerges a kaleidoscopic multiplicity of patterns. So how does that work? Well, everything starts with a circle. The first major decision is how will you divide it up? Most patterns split the circle into four, five or six equal sections. And each division gives rise to distinctive patterns.`,
    "https://teded.tumblr.com/post/161621187719/the-complex-geometry-of-islamic-design",
    "https://imgur.com/zBGXqV1.png",
    "The Complex Geometry of Islamic Design"
  ),
  new Article(
    "a3",
    "ABTW",
    {
      name: "Design",
      color: 'pink',
    },
    Date(),
    `Every horological enthusiast should be enthralled by Tohoku University of Art and Design student Suzuki Kango’s astounding hand-carved wooden automaton clock. With over 400 moving parts, Suzuki’s senior thesis exhibition project uses four magnetic stylus pens on a magnetic drawing board to mechanically write the full time every minute in 24-hour format – and it is a work of art.

    Watching his viral Twitter video, you will see a beautifully complicated-looking mechanical contraption quietly ticking away, with “06:19” somewhat crudely scrawled on a white board in the center. A few seconds into the video, and the entire structure comes to life, the white board is cleared, and mechanical arms scratch out the time “06:20.” Then, in most likelihood, you restart the video to see it happen again, because it truly is that amazing.`,
    "https://www.ablogtowatch.com/suzuki-kango-plock-wooden-automaton-time-writing-clock/",
    "https://imgur.com/Z0ZWK6S.png",
    "Art Student's 407-Piece Hand-Carved Wooden Clock Literally Writes The Time"
  ), 
  new Article(
    "a4",
    "MIT Media Labs",
    {
      name: "Technology",
      color: 'purple',
    },
    Date(),
    `Sleep is a forgotten country of the mind. A vast majority of our technologies are built for our waking state, even though a third of our lives are spent asleep. Current technological interfaces miss an opportunity to access the unique, imaginative, elastic cognition ongoing during dreams and semi-lucid states. In turn, each of us misses an opportunity to use interfaces to influence our own processes of memory consolidation, creative insight generation, gist extraction, and emotion regulation that are so deeply sleep-dependent. In this project, we explore ways to augment human creativity by extending, influencing, and capturing dreams in Stage 1 sleep. It is currently impossible to force ourselves to be creative because so much creative idea association and creative incubation happens in the absence of executive control and directed attention. Sleep offers an opportunity for prompting creative thought in the absence of directed attention, if only dreams can be controlled.
    
    In this project, we explore ways to augment human creativity by extending, influencing, and capturing dreams in the sleep state between wakefulness and unconsciousness. In waking life it’s extremely difficult to concentrate and force ourselves to be creative because much of our disinhibited idea association and creative incubation happens in the absence of directed attention and executively controlled cognition. Attention itself entails filters and censors that inhibit certain creative ideas which our consciousness deems too atypical. If dreams could be controlled, sleep would offer an opportunity for prompting divergent thought in the absence of directed attention and cognitive control.`,
    "https://www.media.mit.edu/projects/sleep-creativity/overview/",
    "https://imgur.com/OYBsTfb.png",
    "Dormio: Interfacing with Dreams"
  ), 
  new Article(
    "a5",
    "RMG",
    {
      name: "History",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `What do pirates do?
    Who became a pirate and what was life like for them? Step into the world of pirates in the classic age of piracy.
    
    What is a pirate?
    A pirate is a robber who travels by water. Though most pirates targeted ships, some also launched attacks on coastal towns.
    
    We often think of pirates as swashbuckling and daring or evil and brutish, but in actual fact most of them were ordinary people who had been forced to turn to criminal activity to make ends meet. 
    
    Where did pirates live? 
    When on the high seas, any one who wasn't a captain would sleep out in the open, either in a hammock or on the floor. There were however, 'pirate havens'. Regions of the Indian Ocean and Madagascar were often safe places for pirates to stay, outside of the law and state governance. 
    
    Did pirates bury their treasure?
    Curator of World and Maritime History Robert Blyth takes on the Curators Against the Clock challenge to answer this question.`,
    "https://www.rmg.co.uk/stories/topics/what-do-pirates-do",
    "https://imgur.com/UmZTPLS.png",
    "The Life and Times of a Pirate"
  ), 
  new Article(
    "a6",
    "Matthew Ward",
    {
      name: "Reading",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `Anecdotally, the reading of literature seems to be down in these trying times. I’ve spoken to some of my author friends, and they, like me, are seeing a downturn in numbers.

    There are obvious reasons for this, but those aren’t points we should dwell on. People have less disposable income. Information is changing so quickly, and in such life-changing ways, that we use our reading time scanning articles for any hint about whether it’s getting worse or better.
    
    Moreover, it’s far too easy to turn on a favorite show or movie with a streaming service like Hulu or Netflix. One turns to many as the auto player keeps queuing the next show and recommendation. All of a sudden, it’s bedtime, and I’ve only read angry tweets about the president while yet another Gilmore Girls episode plays in the background.
    
    Everyone is going through something different right now, so I’m not writing this as some form of judgment. I’ve been extremely lucky through it all. These are merely my own thoughts on why reading novels has been important to me and some of the realizations I’ve had on how structure and genre influence how I’m affected by them.`,
    "https://amindformadness.com/2020/09/reading-for-comfort-reading-for-pain/",
    "https://imgur.com/zBGXqV1.png",
    "Reading for Comfort, Reading for Pain"
  ), 
  new Article(
    "a7",
    "Eric Broug",
    {
      name: "Design",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `In Islamic culture, geometry is everywhere. You can find it in mosques, madrasas, palaces and private homes. This tradition began in the 8th century CE during the early history of Islam, when craftsmen took preexisting motifs from Roman and Persian cultures and developed them into new forms of visual expression. 

    This period of history was a golden age of Islamic culture, during which many achievements of previous civilizations were preserved and further developed, resulting in fundamental advancements in scientific study and mathematics. Accompanying this was an increasingly sophisticated use of abstraction and complex geometry in Islamic art, from intricate floral motifs adorning carpets and textiles, to patterns of tile work that seemed to repeat infinitely, inspiring wonder and contemplation of eternal order.
    
    Despite the remarkable complexity of these designs, they can be created with just a compass to draw circles and a ruler to make lines within them, and from these simple tools emerges a kaleidoscopic multiplicity of patterns. So how does that work? Well, everything starts with a circle. The first major decision is how will you divide it up? Most patterns split the circle into four, five or six equal sections. And each division gives rise to distinctive patterns.`,
    "https://ideas.ted.com/megacities-rooftop-gardens-reduce-urban-heat-island-effect/",
    "https://imgur.com/zBGXqV1.png",
    "One way to create cooler, cleaner cities? Plant rooftop gardens"
  ), 
  new Article(
    "a8",
    "Eric Broug",
    {
      name: "Design",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `In Islamic culture, geometry is everywhere. You can find it in mosques, madrasas, palaces and private homes. This tradition began in the 8th century CE during the early history of Islam, when craftsmen took preexisting motifs from Roman and Persian cultures and developed them into new forms of visual expression. 

    This period of history was a golden age of Islamic culture, during which many achievements of previous civilizations were preserved and further developed, resulting in fundamental advancements in scientific study and mathematics. Accompanying this was an increasingly sophisticated use of abstraction and complex geometry in Islamic art, from intricate floral motifs adorning carpets and textiles, to patterns of tile work that seemed to repeat infinitely, inspiring wonder and contemplation of eternal order.
    
    Despite the remarkable complexity of these designs, they can be created with just a compass to draw circles and a ruler to make lines within them, and from these simple tools emerges a kaleidoscopic multiplicity of patterns. So how does that work? Well, everything starts with a circle. The first major decision is how will you divide it up? Most patterns split the circle into four, five or six equal sections. And each division gives rise to distinctive patterns.`,
    "https://teded.tumblr.com/post/161621187719/the-complex-geometry-of-islamic-design",
    "https://imgur.com/zBGXqV1.png",
    "The Complex Geometry of Islamic Design"
  ), 
  new Article(
    "a9",
    "Eric Broug",
    {
      name: "Design",
      color: 'rgba(0,255,0, 0.5)',
    },
    Date(),
    `In Islamic culture, geometry is everywhere. You can find it in mosques, madrasas, palaces and private homes. This tradition began in the 8th century CE during the early history of Islam, when craftsmen took preexisting motifs from Roman and Persian cultures and developed them into new forms of visual expression. 

    This period of history was a golden age of Islamic culture, during which many achievements of previous civilizations were preserved and further developed, resulting in fundamental advancements in scientific study and mathematics. Accompanying this was an increasingly sophisticated use of abstraction and complex geometry in Islamic art, from intricate floral motifs adorning carpets and textiles, to patterns of tile work that seemed to repeat infinitely, inspiring wonder and contemplation of eternal order.
    
    Despite the remarkable complexity of these designs, they can be created with just a compass to draw circles and a ruler to make lines within them, and from these simple tools emerges a kaleidoscopic multiplicity of patterns. So how does that work? Well, everything starts with a circle. The first major decision is how will you divide it up? Most patterns split the circle into four, five or six equal sections. And each division gives rise to distinctive patterns.`,
    "https://teded.tumblr.com/post/161621187719/the-complex-geometry-of-islamic-design",
    "https://imgur.com/zBGXqV1.png",
    "The Complex Geometry of Islamic Design"
  ), 
]
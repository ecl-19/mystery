// Case 1: The Aldgate Cipher
//
// Story structure:
//   meta        — title shown in the header
//   intro       — displayed on load (the case briefing)
//   outro       — displayed after submitting the solution
//   newspapers  — array of { name, text }
//   directory   — { "Name": "locationId", ... } — exact match, case-insensitive
//   informants  — array of { name, text }
//   locations   — story content for specific location IDs:
//                   text          (string)  — what the player reads on arrival
//                   sets_state    (string or string[]) — flags this visit sets
//                   requires_state (string or string[]) — flags needed to enter
//                   locked_text   (string)  — shown if location is locked
//   questions   — array of { text, answer: string or string[] }
//
// Locations not listed here show a blank "nothing relevant" message
// and do not count toward the player's score.

window.STORY = {

  meta: {
    title: "Case One: The Aldgate Cipher"
  },

  intro:
`It is the 3rd of November, 1895. Inspector Lestrade arrives at Baker Street in some agitation. Edwin Harrington, a cryptographer employed by the War Office, has been found dead in his Aldgate lodgings — poisoned, by all appearances. The case is being suppressed from the press, though one paper has already caught wind of it.

Lestrade is baffled. Harrington was a quiet, solitary man of modest means and apparently few enemies. Yet someone took considerable trouble to kill him. The inspector suspects the motive lies in Harrington's professional work, but the details are beyond him.

He asks for your assistance.`,

  outro:
`The murderer was Dr. Karl Voss. Voss had been engaged by a European intelligence concern to acquire Harrington's cipher method — a significant advance in coded military communications. When Harrington refused to sell, Voss, who as the named patent witness had studied the method in full, chose to take it by force.

On the evening of the 27th, Voss called at the lodgings under pretext of a social visit. He administered arsenic in the tea, waited until Harrington lost consciousness, removed Volume III of the cipher notes from the forced desk drawer, and left. He returned to his Holborn surgery, where the volume was concealed among medical texts.

The half-written letter — "Dear V, I have reconsidered..." — was Harrington's warning, never sent. Had he posted it, Voss might have been arrested before any harm was done.

Voss was apprehended at Dover attempting to board a packet steamer to Calais. The cipher was recovered intact and returned to the War Office.`,

  newspapers: [
    {
      name: "The Morning Chronicle, 3rd November",
      text:
`SUSPICIOUS DEATH IN ALDGATE

The body of a middle-aged gentleman was discovered yesterday morning at lodgings in Aldgate High Street, after neighbours reported that the occupant had not been seen for several days. A woman believed to be the deceased's landlady was found in considerable distress at the scene.

An inspector from the Criminal Investigation Department has been appointed. The cause of death has not been confirmed. The deceased has not been named pending notification of next of kin.`
    },
    {
      name: "The Cryptographers' Quarterly, October Issue",
      text:
`PATENT APPLICATIONS: AUTUMN REVIEW

The Patent Office has received a record fourteen cipher-related applications this quarter. Among the most notable is a submission by Mr. Edwin Harrington, a civil servant attached to the War Office, whose substitution-transposition method has been described by colleagues as technically remarkable — "twenty years ahead of current practice," in the words of one reviewer.

Patent applications of a technical nature require a named professional witness to attest to a method's novelty. Mr. Harrington's witness is listed as Dr. Karl Voss, a physician practising in Holborn, who confirmed the method's completeness and originality. The application is currently under review.`
    }
  ],

  directory: {
    "Harrington, Edwin":   "15",
    "Voss, Karl":          "21",
    "Voss, Dr. Karl":      "21",
    "Scotland Yard":       "1",
    "Lestrade, Inspector": "1",
    "Crabb, Mrs.":         "10",
    "Cryptographers' Quarterly": "11"
  },

  informants: [
    {
      name: "Wiggins — Baker Street Irregulars",
      text:
`Wiggins scuffs his boot against the kerb and reports: "A foreign-looking gent was seen leaving Aldgate High Street in considerable haste the morning the body was found — well before the police arrived. Tall, well-dressed, dark overcoat. One of my lads followed him as far as the City before losing him in the fog."`
    },
    {
      name: "Mycroft Holmes",
      text:
`Your brother receives you in the Stranger's Room at the Diogenes Club with characteristic economy of movement. "The War Office," he says, without looking up from his papers, "is extremely anxious about certain cipher documents that appear to have gone missing from Harrington's possession. I should not recommend making the matter public. I would, however, recommend considerable haste."`
    }
  ],

  locations: {

    "1": {
      text:
`Inspector Lestrade receives you at Scotland Yard with visible relief. He shares what the police have established: Harrington was found by his landlady, a Mrs. Crabb of Covent Garden, who called at the lodgings after a week's silence and no reply to her notes.

The cause of death is confirmed as arsenic poisoning. There were signs of a recent visitor — a second teacup, hastily cleaned. A half-written letter was found on the desk, addressed only to the initial "V."

Lestrade authorises you to examine the lodgings at Aldgate at your discretion.`,
      sets_state: ["police_clearance"]
    },

    "10": {
      text:
`Mrs. Crabb is a stout, practical woman shaken rather thoroughly out of her composure. She tells you that a visitor called upon Mr. Harrington on the evening of the 27th of October — a tall, well-dressed man with what she describes as "a faint foreign accent, very polished." She heard raised voices from the floor above, which was most unlike Mr. Harrington.

The visitor left alone, well past midnight.

She also mentions, almost in passing, that Mr. Harrington had spoken very highly of his physician: "a Dr. Voss, with a surgery somewhere in Holborn." She adds: "A foreign name, but very respectable. Mr. Harrington trusted him entirely."`,
      sets_state: ["suspect_voss"]
    },

    "11": {
      text:
`The editor of The Cryptographers' Quarterly, a Mr. Baines, remembers Harrington well — "precise, cautious, and unusually private for a man in his field." He confirms that Harrington's patent witness was a Dr. Karl Voss of Holborn, a physician with some interest in applied mathematics.

Baines lowers his voice. In recent months, Voss had been approaching several cryptographers on behalf of what he described as "a private European concern" seeking to acquire advanced cipher methods. Harrington had rebuffed him — firmly, and more than once. "The last time I saw Harrington," Baines says, "he told me Voss had become quite insistent. Almost threatening, he said."`
    },

    "15": {
      text:
`Lestrade's authorisation gains you access to Harrington's lodgings. The room shows clear signs of a search. A locked desk drawer has been forced open and left empty. A bound index on the shelf lists three volumes of cipher notes; only Volumes I and II remain. Volume III — subtitled "Transposition Key: Final Method" — is absent.

On the desk lies the unfinished letter: "Dear V, I have reconsidered your offer. The cipher is not for sale at any price. If you persist, I shall be obliged to inform—" The sentence breaks off mid-line. A faint residue on the windowsill is later confirmed by a chemist to be consistent with arsenic compounds.`,
      requires_state: ["police_clearance"],
      locked_text: "The lodgings are sealed by order of Scotland Yard. You will need Inspector Lestrade's authorisation before you can enter.",
      sets_state: ["found_cipher_notes"]
    },

    "21": {
      text:
`Dr. Voss's surgery is shuttered. A neighbour reports that he departed abruptly two days ago, leaving no forwarding address and no explanation.

A constable allows a brief search of the premises. Behind a row of medical texts on the surgery shelf, you find a leather-bound notebook: Volume III of Harrington's cipher notes, with Harrington's name inscribed on the inside cover.

Partially burned in the grate is a letter in German. The legible portions request "the complete method, not merely the summary" and promise "final payment upon delivery in Calais."`,
      requires_state: ["suspect_voss"],
      locked_text: "You have no particular reason to call at this address yet. Further enquiries may point you here."
    }

  },

  questions: [
    {
      text: "Who murdered Edwin Harrington?",
      answer: ["voss", "dr voss", "dr. voss", "karl voss", "dr karl voss", "dr. karl voss", "doctor voss"]
    },
    {
      text: "What did the murderer take from the scene?",
      answer: ["cipher", "cipher notes", "the cipher", "volume iii", "volume 3", "volume three", "the cipher notes", "harrington's cipher", "the transposition key"]
    }
  ]

};

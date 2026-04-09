// Case 1: The Aldgate Cipher
//
// Story structure:
//   meta        — title shown in the header
//   intro       — displayed on load (the case briefing)
//   outro       — displayed after submitting the solution
//   newspapers  — array of { name, date, edition, price, articles: [{headline, text}] }
//   directory   — { "Name": "locationId", ... } — fuzzy matched
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
      name: "The Morning Chronicle",
      date: "Monday, 3rd November, 1895",
      edition: "Morning Edition",
      price: "One Penny",
      articles: [
        {
          headline: "Suspicious Death in Aldgate",
          text:
`The body of a middle-aged gentleman was discovered yesterday morning at lodgings in Aldgate High Street, after neighbours reported that the occupant had not been seen for several days. A woman believed to be the deceased's landlady was found in considerable distress at the scene.

An inspector from the Criminal Investigation Department has been appointed to the matter. The cause of death has not been confirmed. The deceased has not been named pending notification of next of kin. Inquiries may be directed to Inspector Lestrade of Scotland Yard.`
        },
        {
          headline: "Dense Fog Expected Through the Week",
          text:
`The Meteorological Office has issued a caution to residents of the metropolitan area as a dense advection fog settled over London yesterday evening and is expected to persist well into the coming week.

Visibility on the Thames was reported at less than twenty yards by midnight, prompting the Port of London Authority to restrict river traffic until conditions improve. Several omnibus services were delayed or suspended throughout the City and East End. Residents are advised to carry lanterns when travelling after dark.`
        },
        {
          headline: "A Notable Evening at the National Sporting Club",
          text:
`An evening of pugilism at the National Sporting Club on Tuesday produced a result that surprised many observers, when challenger Mr. Patrick Doyle of Whitechapel defeated the reigning middleweight champion Mr. George Rennie in the ninth round.

The bout was keenly contested through the early rounds, with Rennie displaying his customary footwork and economy of movement. Doyle's persistence and considerable reach, however, told in the later stages, and a well-placed combination in the ninth brought proceedings to a close.`
        },
        {
          headline: "Late Parliamentary Business",
          text:
`The House rose at half past eleven on Tuesday evening following a lengthy debate on proposed amendments to the Merchant Shipping Act. The Colonial Secretary spoke at length on the question of liability in cases of cargo loss.

The Prime Minister is expected to address the Commons on Thursday regarding the situation in South Africa, which continues to attract considerable public interest. A full report will appear in tomorrow's edition.`
        }
      ]
    },
    {
      name: "The Cryptographers' Quarterly",
      date: "October, 1895",
      edition: "Vol. XII, No. 4",
      price: "Sixpence",
      articles: [
        {
          headline: "Patent Applications: Autumn Review",
          text:
`The Patent Office has received a record fourteen cipher-related applications this quarter. Among the most notable is a submission by Mr. Edwin Harrington, a civil servant attached to the War Office, whose substitution-transposition method has been described by colleagues as technically remarkable — "twenty years ahead of current practice," in the words of one reviewer.

Patent applications of a technical nature require a named professional witness to attest to a method's novelty. Mr. Harrington's witness is listed as Dr. Karl Voss, a physician practising in Holborn, who confirmed the method's completeness and originality. The application is currently under review.`
        },
        {
          headline: "Mechanical Cipher Devices: A Continental Survey",
          text:
`Correspondents from Vienna and Berlin report continued interest among commercial and diplomatic concerns in mechanical encipherment devices. Several new instruments were exhibited at the Leipzig Technical Fair in September, representing advances upon the rotary disc methods first demonstrated earlier in the decade.

The devices have attracted scepticism from professional cryptographers, who note that mechanical regularity introduces characteristic patterns that a skilled analyst may exploit. The consensus remains that a well-designed manual cipher, rigorously applied, offers superior security to any mechanical substitute. Nevertheless, demand from commercial houses for reliable encipherment without specialist training suggests a ready market, and further development is anticipated.`
        },
        {
          headline: "Obituary: Professor Henry Alderton, F.R.S.",
          text:
`It is with regret that we record the death of Professor Henry Alderton, Fellow of the Royal Society and for thirty years a leading figure in the study of historical cryptography. Professor Alderton's edition of the Bacon-Wilkins correspondence, published in 1881, remains the standard reference in the field.

He is survived by his wife, two sons, and a daughter. A memorial lecture in his honour is to be established at King's College, London. Tributes from correspondents will appear in our next issue.`
        },
        {
          headline: "Society Notes",
          text:
`The autumn meeting of the Society will be held on the 19th of November at the usual rooms in Pall Mall. Members are invited to submit papers for the spring lecture programme by the end of the year.

The Secretary notes that subscriptions for the current year remain outstanding in several cases and requests that these be settled at the earliest convenience. New members may apply in writing to the Honorary Secretary.`
        }
      ]
    }
  ],

  directory: {
    "Harrington, Edwin":        { area: "10", address: "14 Aldgate High Street" },
    "Voss, Karl":               { area: "7",  address: "18 Southampton Row" },
    "Voss, Dr. Karl":           { area: "7",  address: "18 Southampton Row" },
    "Scotland Yard":            { area: "5",  address: "Scotland Yard, Whitehall" },
    "Lestrade, Inspector":      { area: "5",  address: "Scotland Yard, Whitehall" },
    "Crabb, Mrs.":              { area: "7",  address: "3 Drury Lane" },
    "Cryptographers' Quarterly": { area: "8", address: "47 Fleet Street" }
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

    "5:Scotland Yard, Whitehall": {
      text:
`Inspector Lestrade receives you at Scotland Yard with visible relief. He shares what the police have established: Harrington was found by his landlady, a Mrs. Crabb of Covent Garden, who called at the lodgings after a week's silence and no reply to her notes.

The cause of death is confirmed as arsenic poisoning. There were signs of a recent visitor — a second teacup, hastily cleaned. A half-written letter was found on the desk, addressed only to the initial "V."

Lestrade authorises you to examine the lodgings at Aldgate at your discretion.`,
      sets_state: ["police_clearance"]
    },

    "7:3 Drury Lane": {
      text:
`Mrs. Crabb is a stout, practical woman shaken rather thoroughly out of her composure. She tells you that a visitor called upon Mr. Harrington on the evening of the 27th of October — a tall, well-dressed man with what she describes as "a faint foreign accent, very polished." She heard raised voices from the floor above, which was most unlike Mr. Harrington.

The visitor left alone, well past midnight.

She also mentions, almost in passing, that Mr. Harrington had spoken very highly of his physician: "a Dr. Voss, with a surgery somewhere in Holborn." She adds: "A foreign name, but very respectable. Mr. Harrington trusted him entirely."`,
      sets_state: ["suspect_voss"]
    },

    "8:47 Fleet Street": {
      text:
`The editor of The Cryptographers' Quarterly, a Mr. Baines, remembers Harrington well — "precise, cautious, and unusually private for a man in his field." He confirms that Harrington's patent witness was a Dr. Karl Voss of Holborn, a physician with some interest in applied mathematics.

Baines lowers his voice. In recent months, Voss had been approaching several cryptographers on behalf of what he described as "a private European concern" seeking to acquire advanced cipher methods. Harrington had rebuffed him — firmly, and more than once. "The last time I saw Harrington," Baines says, "he told me Voss had become quite insistent. Almost threatening, he said."`
    },

    "10:14 Aldgate High Street": {
      text:
`Lestrade's authorisation gains you access to Harrington's lodgings. The room shows clear signs of a search. A locked desk drawer has been forced open and left empty. A bound index on the shelf lists three volumes of cipher notes; only Volumes I and II remain. Volume III — subtitled "Transposition Key: Final Method" — is absent.

On the desk lies the unfinished letter: "Dear V, I have reconsidered your offer. The cipher is not for sale at any price. If you persist, I shall be obliged to inform—" The sentence breaks off mid-line. A faint residue on the windowsill is later confirmed by a chemist to be consistent with arsenic compounds.`,
      requires_state: ["police_clearance"],
      locked_text: "The lodgings are sealed by order of Scotland Yard. You will need Inspector Lestrade's authorisation before you can enter.",
      sets_state: ["found_cipher_notes"]
    },

    "7:18 Southampton Row": {
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

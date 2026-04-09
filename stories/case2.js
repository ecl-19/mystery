// Case 2: The Woodhouse Affair

window.STORY = {

  meta: {
    title: "Case Two: The Woodhouse Affair"
  },

  intro:
`It is the 19th of November, 1895. A solicitor, Mr. Edmund Norris of Chancery Lane, arrives at Baker Street in a state of controlled agitation. His client, Mr. Gerald Woodhouse — a senior partner at the merchant bank of Woodhouse & Hearne — collapsed and died at dinner at White's Club three evenings past. The death has been recorded as heart failure, the result of a long-standing cardiac complaint.

Mr. Norris is not satisfied. On the morning of the 16th, Woodhouse sent an urgent note requesting an appointment "on a matter of the gravest domestic consequence." He never kept it, dying that same evening. Norris also notes that Woodhouse's will — which was to have been substantially revised — now passes the entire estate to his wife, Mrs. Clara Woodhouse of Pimlico Road.

The police have closed the matter. Holmes listens, lights his pipe, and sends you out.`,

  outro:
`Mrs. Clara Woodhouse had been systematically forging her husband's signature on private accounts for nearly two years, diverting funds into an account held in her maiden name at a Pimlico bank. When Woodhouse discovered the discrepancy in October and confronted her, she faced not only disinheritance but criminal prosecution.

She obtained arsenic through a supplier in the City, decanted it into a counterfeit bottle closely resembling Dr. Pemberton's prescription, and substituted it for the genuine tonic on the 1st of October. The cumulative dose was carefully judged to produce the appearance of advancing cardiac failure.

Her appearance at White's on the evening of the 16th — a considerable breach of convention — was a final attempt to persuade her husband to withdraw his appointment with Norris. He refused.

She was arrested at Victoria Station the following afternoon, a first-class ticket to Calais in her purse. The forged accounts were recovered from a safe deposit box at a branch of the London & County Bank on Lupus Street. Gerald Woodhouse's estate was placed in the hands of the court.`,

  newspapers: [
    {
      name: "The Morning Post",
      date: "Thursday, 18th November, 1895",
      edition: "Morning Edition",
      price: "One Penny",
      articles: [
        {
          headline: "Death of a City Banker",
          text:
`Mr. Gerald Woodhouse, senior partner of the merchant bank Woodhouse & Hearne, died on Monday evening at White's Club, St James's Street, where he had been dining with associates. He was fifty-three years of age.

Mr. Woodhouse had suffered from a cardiac complaint for some years and had been under medical supervision. His physician has confirmed that the cause of death was consistent with heart failure. He is survived by his wife, Mrs. Clara Woodhouse, of Pimlico Road. No children. Funeral arrangements are private.

Mr. Woodhouse had been a member of White's for over twenty years and was widely regarded in the City as a man of sound judgement and careful dealing.`
        },
        {
          headline: "Fog Disperses After Three Days",
          text:
`The dense advection fog which settled over the metropolitan area on Sunday has at last dispersed, following a change of wind from the south-west in the early hours of Wednesday morning. Residents of the eastern districts reported the worst conditions, with visibility on several stretches of the Commercial Road reduced to a matter of yards.

The Port of London Authority lifted its advisory restriction on river traffic yesterday afternoon. Several railway services remain subject to delays pending inspection of signalling equipment. The Meteorological Office has issued no further cautions for the coming week, though temperatures are expected to remain unseasonably low.`
        },
        {
          headline: "The Kempton Park Stakes",
          text:
`Tuesday's card at Kempton Park produced little in the way of surprises, the principal race falling to Lord Inverdale's colt Persimmon's Boy, starting at seven to two, in a field of nine. The favourite, Captain Hawker's Rosamund, finished third after a troubled run on the far side.

Racing will resume at Sandown on Saturday, weather permitting. The winter fixture list has been published by Weatherby's and is available from the usual outlets. Several prominent stables have already confirmed their entries for the principal events of the season.`
        },
        {
          headline: "Masonic Dinner at the Guildhall",
          text:
`The annual winter dinner of the United Grand Lodge of England was held on Tuesday evening at the Guildhall, with some four hundred brethren in attendance. The Deputy Grand Master presided in the absence of the Grand Master, who is presently abroad.

The toast to the Queen was given by the Provincial Grand Master for Middlesex and received with customary enthusiasm. Several charitable resolutions were passed, including a grant to the Masonic School at Wood Green. The evening concluded with musical entertainment from the band of the Coldstream Guards.`
        }
      ]
    },
    {
      name: "The City & Financial Gazette",
      date: "Wednesday, 18th November, 1895",
      edition: "Evening Edition",
      price: "Twopence",
      articles: [
        {
          headline: "Succession at Woodhouse & Hearne",
          text:
`The death of Mr. Gerald Woodhouse leaves the merchant house of Woodhouse & Hearne in the sole direction of the surviving partner, Mr. Frederick Hearne, who has issued a statement assuring clients that all commitments will be honoured and that business will continue without interruption.

It is understood that the firm has in recent weeks engaged an independent auditor to review certain internal accounts. Mr. Hearne has declined to comment on the matter, noting only that such reviews are "a routine precaution undertaken periodically in the interests of sound governance." Sources familiar with the firm suggest that the review was prompted by discrepancies identified earlier this quarter.`
        },
        {
          headline: "The Autumn Clearing House",
          text:
`The Bankers' Clearing House has published its summary of settlements for the month of October, showing a modest decline of three per cent in total volume against the corresponding period of the previous year. The result reflects the general caution which has characterised commercial lending since the summer's difficulties in the Argentine market.

The Governor of the Bank of England addressed the figure in measured terms at the Institute of Bankers on Tuesday, declining to characterise it as a cause for concern while noting that "prudence remains the appropriate disposition" for the months ahead.`
        },
        {
          headline: "A Cautionary Tale from Hamburg",
          text:
`Our Hamburg correspondent reports the conclusion of a fraud prosecution arising from the activities of a clerk at a private bank in that city, who over a period of four years succeeded in diverting some forty thousand marks into accounts held in fictitious names. The case attracted considerable professional interest owing to the sophistication of the methods employed, which included the systematic forgery of authorising signatures on internal transfer documents.

The defendant was sentenced to seven years' hard labour. The case has prompted renewed discussion among British banking houses of the controls applied to signatory authorisation, and at least two City institutions are understood to be reviewing their procedures in consequence.`
        },
        {
          headline: "Imperial Preference: A Dissenting View",
          text:
`At a dinner of the Political Economy Club on Monday, Professor Aldcroft of University College delivered a characteristically combative address in opposition to the growing movement for preferential tariffs within the Empire. His argument, that such arrangements would entrench inefficiency in domestic industry while alienating those neutral trading partners upon whom British commerce most depends, was received with mixed response.

The debate on Imperial Preference shows no sign of resolution. The Colonial Secretary is expected to address the matter in a forthcoming speech, though his precise position remains a subject of considerable speculation among those who follow these affairs closely.`
        }
      ]
    }
  ],

  directory: {
    "Norris, Mr. Edmund":        { area: "8",  address: "14 Chancery Lane" },
    "White's Club":              { area: "5",  address: "White's Club, St James's Street" },
    "Pemberton, Dr. Henry":      { area: "1",  address: "6 Harley Street" },
    "Hearne, Mr. Frederick":     { area: "9",  address: "7 Cornhill" },
    "Woodhouse, Gerald":         { area: "4",  address: "14 Pimlico Road" },
    "Woodhouse, Clara":          { area: "4",  address: "14 Pimlico Road" },
    "Woodhouse, Mrs.":           { area: "4",  address: "14 Pimlico Road" }
  },

  informants: [
    {
      name: "Wiggins — Baker Street Irregulars",
      text:
`Wiggins pulls his cap down and reports: "A hansom was seen outside fourteen Pimlico Road on three separate evenings last month — not the regular cab the household uses. Came after dark, stayed less than an hour, left in a hurry. My lad couldn't get a look at the fare. But it always came from the direction of the City."`
    },
    {
      name: "Mycroft Holmes",
      text:
`Your brother receives you without looking up from his papers. "Woodhouse I knew slightly through the club. Sound banker of the old school — thorough, unimaginative, reliable. The sort of man who checks his ledgers twice." A pause. "His wife I have seen on one occasion, at a function at the Guildhall. Charming, very composed, rather younger than her years suggested. It has always seemed to me that a woman of her particular intelligence would find the life of a Pimlico banker's wife somewhat... limiting."`
    }
  ],

  locations: {

    "5:White's Club, St James's Street": {
      text:
`The club's head steward, a Mr. Thomas Griggs, speaks with the careful discretion of a man who has spent thirty years keeping members' confidences. Mr. Woodhouse dined on Monday the 16th as was his custom — a standing Tuesday table of three, which he had kept for years. He was in low spirits and ate very little.

Shortly before dinner was announced, a porter brought Woodhouse a note. He excused himself and went to the vestibule. Members do not receive visitors beyond the entrance hall. Two of the stewards heard raised voices — a woman's, they are certain — from behind the vestibule door. Woodhouse returned to the dining room after some minutes, visibly shaken, and said nothing of the matter.

Griggs lowers his voice. "Mr. Woodhouse had not seemed himself for some weeks, sir. Since October, perhaps. Poor colour, short of breath, not his usual appetite. We assumed his heart was troubling him."`,
      sets_state: ["dinner_scene"]
    },

    "8:14 Chancery Lane": {
      text:
`Mr. Norris is a dry, precise man who chooses his words with the care of a man accustomed to their consequences. On the morning of the 16th, Woodhouse arrived in his office without an appointment, agitated in a manner wholly unlike him.

He wished to alter his will immediately, removing Mrs. Woodhouse as sole beneficiary. He also asked Norris, with some embarrassment, whether he could recommend "a reliable and discreet inquiry agent" as he believed "certain financial instruments bearing his name had been misused." He did not elaborate further, but promised to return that afternoon with documents he had retrieved from the bank.

He never came. The following morning, Norris received a brief note from Mrs. Woodhouse informing him of her husband's death and requesting that all testamentary matters be treated as closed.`,
      sets_state: ["solicitor_consulted"]
    },

    "4:14 Pimlico Road": {
      text:
`Mrs. Woodhouse receives you in the drawing room with composed, dry-eyed grief. She is perhaps thirty-five, handsome, and very still. She answers your questions with measured sorrow and volunteers nothing.

She leaves you unattended in the study for some minutes while she speaks to a servant. On the mantelpiece stands a brown glass bottle: "Cardiac Tonic — Dr. H. Pemberton, 6 Harley Street — one measure nightly." It is three-quarters empty. There is a faint, sweetish chemical odour you cannot quite place.

In the unlocked desk drawer, among routine correspondence, you find a bundle of letters from Woodhouse & Hearne on matters of internal account. Several bear Woodhouse's signature. Comparing them with a framed letter on the wall — signed by Woodhouse on a matter of some civic distinction — the hand of the signature is subtly but unmistakably different.

On your way out, Mrs. Woodhouse mentions, as though it were nothing: "Gerald so rarely went out in the evenings these past months. I always collected his prescription myself."`,
      requires_state: ["dinner_scene"],
      locked_text: "The household is in mourning and is not receiving visitors. You will need some cause before calling at Pimlico Road.",
      sets_state: ["found_tonic", "suspect_clara"]
    },

    "1:6 Harley Street": {
      text:
`Dr. Pemberton examines the bottle carefully, then sets it down with deliberate calm.

"This is not my bottle." He opens a cabinet and produces an identical-looking vessel. The glass of his is fractionally darker. His labels are handwritten — he does not use a printer. The typeface on the bottle you have brought is set in a typeface he does not recognise and has never used.

He prescribed a standard compound of digitalis and iron, renewed monthly. His last dispensation was on the 1st of November. He kept no record of who collected it, as collection by a family member is commonplace — but he recalls that Mrs. Woodhouse had collected every prescription herself, without exception, since the summer.

"The compound I dispense is entirely safe at the prescribed dose," he says carefully. "I would not like to speculate as to the contents of that bottle."

A subsequent analysis will confirm the bottle contains arsenic sulphide in solution.`,
      requires_state: ["found_tonic"],
      locked_text: "You have no particular reason to call on Dr. Pemberton yet. Further enquiries may point you here."
    }

  },

  questions: [
    {
      text: "Who murdered Gerald Woodhouse?",
      answer: ["clara woodhouse", "mrs woodhouse", "mrs clara woodhouse", "clara", "mrs. woodhouse", "mrs. clara woodhouse"]
    },
    {
      text: "By what means was the poison administered?",
      answer: ["tonic", "heart tonic", "cardiac tonic", "medicine", "the tonic", "his tonic", "poisoned tonic", "heart medicine", "the medicine", "the cardiac tonic", "prescription", "his prescription"]
    }
  ]

};

---
title: Hacked
description: How AI changed security, and what to do about it.
pubDate: 2026-10-09
image: /og/hacked.png
---

"HACKED" is a very common word for me to see on my YouTube feed. It's to the
point that the [recent FBI hack](https://youtu.be/D6p2-IVRrrk) got a few blinks
out of me before I just kept scrolling. Not because it doesn't matter. The
hackers claim to have personal details on thousands of FBI employees, and those
are real people with real families. It's that headlines like this have become
so normal they barely register. In this article, I'll explain the way security
used to work, why the old paradigm no longer works and what you should actually
do about it. Quick disclaimer: I'm a software engineer, not a security
specialist. This article covers the developer-oriented security work that has
kept the companies I've worked with safe, but it isn't exhaustive.

Cybersecurity has always been less of a wall and more of a complicated maze.
All of your passwords, passkeys and biometric data give you the path through
the maze that's just for you. Security people have known for a long time that
it is virtually impossible to plug every hole in the maze. There is always a
path through for a bad actor. The issue for said bad actor is the maze would
get so complicated that it's simply no longer worth it to keep trying to get
in. Hackers might go for a lower-value target simply because it's easier to
break in.

So what happened with AI? AI allows automated bots to run down the security
maze looking for ways through and it can do this at an accelerated rate. In
2025, Anthropic
[reported](https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf)
that attackers had used its AI to do 80-90% of the hands-on work in a hacking
campaign. The previous security model relied on plugging holes in the maze
through something called patches. Making sure that you were keeping up with
patches was usually good enough for small and mid-size businesses. That is no
longer the case. Mandiant found that in 2021 and 2022, attackers took an
average of 32 days to exploit a newly announced vulnerability. In 2023, it was
[5 days](https://www.helpnetsecurity.com/2024/10/16/time-to-exploit-vulnerabilities-2023/).
Keeping up with patches is still important and you should do so in an automated
fashion but it's not quite enough.

The current thinking in security is to
[assume breach](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview)
and shrink the blast radius. In maze terms, this means you should assume that
several bots are going to get through. Once they actually break into your
system, they'll realize they only have access to a tiny padded room with
little more than pocket change in it.

So what does this mean for you specifically? I'll break my tactical advice
into 3 categories based on the size of the company or thing you are securing.

## Individuals and Families

- Use a password manager (1Password is my recommendation) and let it
  generate your passwords.
- For the one password you do have to remember, use a long password, not a
  complex one. (bobbylikespurpleradishes is better than B0BBy74@$&) NIST covers
  why in
  [Appendix A.2](https://pages.nist.gov/800-63-4/sp800-63b.html#length) and
  [A.3](https://pages.nist.gov/800-63-4/sp800-63b.html#complexity) of its
  password guidelines.
- Use passkeys where available.
- Log in with SSO where available.
- Use multi-factor authentication, ideally an authenticator app instead of
  text messages.
- Keep your phone and computer updated.

## Small Startups (pre-launch to your first few thousand users)

Advice to small startups or very early stage builders. You don't need a
security team yet, and most of your effort should go into making something
people want. But remember those bots running the maze. They don't check how big
you are before trying the door, and as soon as you have users, you're holding
their data. The following list is the bare minimum, and none of it takes long.

- Use SSO providers instead of passwords (Sign in with Google, Facebook,
  GitHub, Microsoft, etc.)
- Don't hold payment data if you don't have to (use Stripe, PayPal, Square,
  Helcim, etc.)
- Keep API keys and passwords out of your code. They belong in environment
  variables on the server, never in the browser or in GitHub.
- Give each key and database user only the access it needs. (If you use
  Supabase or Firebase, turn on row-level security or security rules. In 2025,
  a researcher found
  [about 170 apps](https://nvd.nist.gov/vuln/detail/CVE-2025-48757) built
  with the AI app builder Lovable whose databases were open to anyone because
  this wasn't turned on.)
- Turn on multi-factor authentication for your admin accounts (GitHub, your
  cloud provider, your domain registrar, Stripe, etc.)
- Keep backups and actually test restoring them.
- Ask AI to do a security scan on your system and to give you advice on basic
  security measures. It will miss things, so treat it as a first pass.
- Use automated dependency updates (Dependabot, Renovate, etc.). This is how
  you keep up with patches without thinking about it.

## Medium-Size Startups and Larger

At this stage, hire someone to do security analysis on your system if you can
afford it and use automated systems as much as possible. This field is rapidly
changing and it requires sustained effort to keep your company secure. The
specific tools will change quickly, but the ideas in this article won't.
Everything on the startup list still applies, and the bigger you get, the more
it matters that each person and system can only reach what it needs.

## Conclusion

You can't build a maze the bots won't solve. What you can control is what they
find when they get through. If it's a padded room with pocket change, you end
up with a disappointed hacker. If it's your admin keys and every user's data,
it could sink your company.

If you've built something with AI and you're not sure which one you have,
that's exactly what I help with.
[Book a free 30-minute call](https://cal.com/tristan-barrow-37tyc2/30min) and
we'll look at it together.

## Sources

- Anthropic, [Disrupting the first reported AI-orchestrated cyber espionage campaign](https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf) (2025)
- CNBC, [ShinyHunters hackers say they breached FBI, stole data on bureau employees](https://www.cnbc.com/2026/09/22/shinyhunters-hack-fbi-stole-data.html) (September 2026)
- Help Net Security, [Defenders must adapt to shrinking exploitation timelines](https://www.helpnetsecurity.com/2024/10/16/time-to-exploit-vulnerabilities-2023/) (October 2024), reporting Mandiant data
- Microsoft, [Zero Trust as a security foundation](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview)
- NIST, [SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) (2025), Appendix A.2 (Length) and A.3 (Complexity)
- National Vulnerability Database, [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757) (2025)
- Video coverage of the FBI breach claim: [NBC News](https://youtu.be/1F7nHZgV7Z4),
  [Fox News](https://youtu.be/5-63DF9Eogs), [Low Level](https://youtu.be/zBRQR_XOsEE),
  [John Hammond](https://youtu.be/D6p2-IVRrrk)

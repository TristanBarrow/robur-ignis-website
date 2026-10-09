“HACKED” is a very common word for me to see on my YouTube feed. It’s to the
point that the [recent FBI hack](https://youtu.be/D6p2-IVRrrk) got a few
blinks out of me before I just kept scrolling. Not because it doesn't matter.
The hackers claim to have personal details on thousands of FBI employees, and
those are real people with real families. It's that headlines like this have
become so normal they barely register. AI has made it cheap to try every door,
so being small doesn't keep you safe anymore. In this article, I’ll explain the
way security used to work, why the old paradigm no longer works and what you
should actually do about it. I'm a software engineer, not a security
specialist. What follows is the security work that lands on developers, which
is the part I know best.

Cybersecurity has always been less of a wall and more of a complicated maze.
All of your passwords, passkeys and biometric data give you the path through
the maze that's just for you. Security people have known for a long time that
it is virtually impossible to plug every hole in the maze. There is always a
path through for a bad actor. The issue for said bad actor is the maze would
get so complicated that it's simply no longer worth it to keep trying to get in. Hackers might go for a lower value
target simply because it's easier to break in.

So what happened with AI? AI allows automated bots to run down the security
maze looking for ways through and it can do this at an accelerated rate. The
previous security model relied on plugging holes in the maze through something
called patches. Making sure that you were keeping up with patches was usually
good enough for small and mid-size businesses. That is no longer the case.
Keeping up with patches is still important and you should do so in an automated
fashion but it's not quite enough.

The current thinking in security is to
[assume breach](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview)
and shrink the blast radius. In maze terms, this means you should assume that
several bots are going to get through. Once they actually break into your
system, they'll realize they only have access to a tiny padded room with
little more than pocket change in it.

So what does this mean for you specifically? I'll break my actionable advice
into 3 categories based on the size of the company or thing you are securing.

Individuals and families:
- Use a password manager (1Password is my recommendation) and let it
  generate your passwords.
- For the one password you do have to remember, use a long password, not a
  complex one. (bobbylikespurpleradishes is better than B0BBy74@$&)
- Use passkeys where available.
- Log in with SSO where available.
- Use multi-factor authentication, ideally an authenticator app instead of
  text messages.
- Keep your phone and computer updated.

Small Startups (pre-launch to your first few thousand users):

Advice to small startups or very early stage builders. You don't need a
security team yet, and most of your effort should go into making something
people want. But remember those bots running the maze. They don't check how big
you are before trying the door, and as soon as you have users, you're holding
their data. The following list is the bare minimum, and none of it takes long.

- Use SSO providers instead of passwords (Sign in with Google, Facebook,
  GitHub, Microsoft, etc...)
- Don't hold payment data if you don't have to (use Stripe, PayPal, Square,
  Helcim, etc...)
- Keep API keys and passwords out of your code. They belong in environment
  variables on the server, never in the browser or in GitHub.
- Give each key and database user only the access it needs. (If you use
  Supabase or Firebase, turn on row-level security or security rules.)
- Turn on multi-factor authentication for your admin accounts (GitHub, your
  cloud provider, your domain registrar, Stripe, etc...)
- Keep backups and actually test restoring them.
- Ask AI to do a security scan on your system and to give you advice on basic
  security measures. It will miss things, so treat it as a first pass.
- Use automated dependency updates (Dependabot, Renovate, etc...). This is how
  you keep up with patches without thinking about it.

Medium size startups and larger:

At this stage, hire someone to do security analysis on your system if
you can afford it and use automated systems as much as possible. This field is
rapidly changing and it requires sustained effort to keep your company secure.
The specific tools will change quickly, but the ideas in this article won't.
Everything on the startup list still applies, and the bigger you get, the more
it matters that each person and system can only reach what it needs.

Conclusion:

If you are a small startup, you don't need to go overboard, but you can't skip
the basics either. Do the simple things now and put the rest of your energy
into building. Medium to large businesses should consult with security
specialists to stay up to date with the latest security measures and trends.

Sources:
- NBC News, [Hackers say they breached FBI & stole data](https://youtu.be/1F7nHZgV7Z4)
- Fox News, [Hacking group claims it BREACHED FBI system, stole employee data](https://youtu.be/5-63DF9Eogs)
- Low Level, [government hack situation is absolutely insane](https://youtu.be/zBRQR_XOsEE)
- John Hammond, [oh my god](https://youtu.be/D6p2-IVRrrk)



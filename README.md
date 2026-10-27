# FluentStep

Hindi-supported English learning for Beginner (sentence formation), Intermediate (grammar and connected speech), and Advanced (precision and refinement).

## Vercel setup

- Framework: Other / no framework; repository root is the project root.
- Build command: `npm run build`; output directory: `public`.
- `api/ai.js` is a Vercel Node function outside the static output.
- Configure `GEMINI_API_KEY` privately in Vercel and redeploy. No `NEXT_PUBLIC_` prefix. The browser never receives it.
- Optional `GEMINI_MODEL`: a text model ID. Without this, the server discovers a Flash model available to the key. Listing models is not proof that generation works.
- Optional `APP_ACCESS_CODE`: a shared small-group access code. Learners enter this in Connection. Never reuse the Gemini API key as this code.

## Included behaviour

- Real server calls for custom translation, grammar/vocabulary sentence feedback, and contextual debate.
- 90 topic/stage entries per level. Complete AI-generated lessons are requested on first use and cached locally. This is not 270 prewritten, educator-reviewed lessons.
- Vocabulary: exactly 20 validated headwords per generated day. Repeats are rejected against all vocabulary sets saved for that level in the same browser. The 1,800-word per-track goal is generated over 90 days; it is not a pre-generated guaranteed inventory across all users.
- Five new quiz questions per request. Recent question texts are excluded; repetition of an underlying rule is expected.
- English/Hindi microphone typing through browser SpeechRecognition where supported, and playback using speech synthesis. Voice typing is not pronunciation scoring.
- Browser-local progress, lesson cache, vocabulary and drafts. No account, cloud synchronisation, online friends rooms, or shared multi-user database.
- AI-generated material can be wrong. Review significant explanations and answers. Cache reuse reduces calls, but quota and API access remain Google-controlled.

## Limits and launch checks

Run `npm test` and `npm run build`. Automated tests mock Google; they do not prove the user's deployed key works.

On the new deployment, open Connection and run both Connection check and Live generation test. Then test NEW personal sentences in Translate and Check, load 20 words, submit a vocabulary sentence, request two quiz sets, send two related debate turns, and test Hindi/English mic permissions on the learner's browser.

The in-memory 12-requests/minute/IP guard is best effort per server instance, not a durable global quota control. Use Vercel firewall controls/durable rate limiting before wider public promotion. APP_ACCESS_CODE is suitable only as a small-group gate, not individual authentication.

Never ask learners for a Gemini API key. The old browser key storage entry is removed on load. No key is logged or returned in errors.

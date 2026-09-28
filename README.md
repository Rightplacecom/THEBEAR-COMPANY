# The Bear House
LIVE LINK: https://thebear-house-2.onrender.com

## Product overview

The Bear House is a responsive menswear storefront concept for discovering and buying everyday clothing. Alongside the core shopping journey, it includes a “Bear House Lab” concept: a set of personalized styling, creative, community, and loyalty experiences intended to make product discovery more useful and expressive.

This repository is a front-end prototype, not a production commerce service. Product data is local sample data, and several Lab experiences display illustrative/demo responses. No conversion, retention, or revenue impact has been measured yet.

## Product problem

Online apparel shoppers have to make several decisions with limited context: what fits their style, which size to choose, how an item will work with their wardrobe, and whether a product is available or worth buying. Generic category browsing can make discovery feel effortful, while uncertainty about fit and styling can delay purchase or contribute to returns.

### Product hypothesis

If shoppers can move from relevant inspiration to clear product details, fit guidance, and a confident checkout—and optionally use personalized styling tools—then they will find suitable products faster and be more likely to complete a purchase. This is a hypothesis to test, not a result established by this prototype.

### Intended users

- **Style explorer:** wants inspiration and curated collections without knowing exactly what to search for.
- **Decisive shopper:** knows the category or item they want and values fast search, filters, and a simple cart.
- **Fit-conscious shopper:** needs sizing information and confidence before adding an item to the bag.
- **Gift buyer or returning customer:** wants quick recommendations, drop reminders, and relevant rewards.

## Product goals and non-goals

### Goals

1. Make it easy to discover products through collections, categories, search, and filters.
2. Give shoppers enough product, price, and size context to make a considered choice.
3. Keep the add-to-bag and checkout journey understandable on mobile and desktop.
4. Explore personalized discovery and engagement concepts in one clearly discoverable place.
5. Define measurable outcomes before investing in production integrations.

### Non-goals for this prototype

- Processing real payments, placing orders, or maintaining inventory.
- Authenticating customers or storing account information.
- Providing production AI recommendations, image search, virtual try-on, or live store stock.
- Claiming business impact, model accuracy, or customer adoption without instrumented research.

## Current experience and feature design

| Area | User need | Current prototype behavior | Intended user benefit |
|---|---|---|---|
| Home and collections | Get oriented and find a style direction | Campaign hero, collection cards, bestsellers, and a link to the Bear House Lab | A visual starting point instead of an empty product grid |
| Shop and discovery | Narrow a broad catalog | Sample catalog with category, collection, and price filters plus price sorting | Less time scanning irrelevant items |
| Product detail | Understand an item before buying | Product image, description, current/original price, sizes, size-guide modal, add-to-bag, price-drop toggle, and “Complete the Look” suggestions | More context and a clear next action |
| Search | Find a known item or collection | In-page search across local product names and collections | A direct route from intent to a product |
| Bag | Review and adjust a selection | Size-specific items, quantity controls, removal, subtotal, and persisted browser state | Visibility and control before checkout |
| Checkout | See the expected purchase steps | Required contact/address fields, demo payment choices, and a local order-confirmation state | A prototype of the checkout flow; it does not submit a real order |
| Bear House Lab | Get styling help or participate in the brand | Eight demo tools, a drop reminder/countdown, sample rewards status, and a local community vote | A place to explore personalized discovery and engagement concepts |

### Bear House Lab tools

| Tool | Intended job | Prototype behavior and current limitation |
|---|---|---|
| AI Fandom Stylist | Turn an interest into a relevant outfit | Shows a sample text recommendation; not connected to an AI service |
| AI Outfit Generator | Suggest a look for a mood or occasion | Shows a preset sample outfit; weather selection does not affect a live recommendation |
| Virtual Try-On | Preview an item before purchase | Accepts an image and displays a demo response; it does not render clothing onto the photo |
| Search by Image | Find visually similar products | Accepts an image and displays preset matches; no image model or product similarity search is connected |
| Design Your Tee | Personalize a tee | Previews editable text and color, then adds a catalog tee to the bag; the custom artwork is not fulfilled or saved |
| AI Gift Finder | Find a gift for a recipient | Shows a sample product recommendation; no ranking or gift profile is persisted |
| Store Inventory | Check nearby availability | Shows example store stock; it is not live inventory and does not use location services |
| AI Size Recommendation | Reduce size uncertainty | Shows a sample recommendation; entered height and weight are not validated or used to calculate fit |

## Key user journeys

### Discover and buy

1. Arrive at the home page and choose a collection, bestseller, or shop-all entry point.
2. Narrow the catalog by category, collection, price, or sort order, or search by name/collection.
3. Open a product, review its details, select a size, and add it to the bag.
4. Review quantities and total in the bag.
5. Enter demo checkout details and see the local confirmation state.

### Explore a style recommendation

1. Open the Bear House Lab from the home-page banner or footer.
2. Choose a tool and provide a prompt or image when the interface requests it.
3. Review the illustrative result; where supported, continue to the bag.

The recommendation and image flows are UI demonstrations. A production version would need connected services, transparent explanations, privacy controls, and measurable quality checks before being presented as real AI functionality.

## Product requirements and design decisions

- Keep primary shopping actions discoverable from the header on desktop and mobile.
- Make category and collection context visible while browsing.
- Show size selection before adding a product to the bag.
- Preserve bag contents across page reloads in the current browser.
- Provide visible empty states and confirmation states.
- Treat recommendations as assistive: shoppers must remain in control of product, size, and purchase decisions.
- Label sample data, estimated availability, and generated content clearly in a production experience.
- Do not imply that a reminder, vote, sign-in, order, payment, or inventory check is connected to a backend when it is not.

## Success metrics and KPI plan

There is no analytics instrumentation or validated baseline in this prototype. The targets below are **proposed experiment thresholds**, not achieved results. Establish baselines with a usability study or production event data before treating them as commitments.

### North-star outcome

**Qualified purchase conversion:** percentage of eligible shopping sessions that complete a successful, non-test order. In a real deployment, define eligibility, deduplicate sessions, exclude internal/test traffic, and distinguish paid/confirmed orders from checkout attempts.

| KPI | Definition | Why it matters | Initial target to test |
|---|---|---|---|
| Product discovery success | Sessions that open a product detail page ÷ sessions that enter the shop | Indicates whether discovery surfaces lead to relevant products | Improve 10% relative to a measured control |
| Search success rate | Search sessions that open a product within the same session ÷ sessions with a search | Measures whether search results satisfy expressed intent | Improve 10% relative to control |
| Product-to-bag rate | Product sessions with an add-to-bag event ÷ product detail sessions | Evaluates product-page clarity and purchase intent | Improve 8% relative to control |
| Checkout completion | Confirmed orders ÷ checkout starts | Reveals friction after bag review | Improve 5% relative to control |
| Size-guide usefulness | Size-guide users who add the viewed product to bag ÷ size-guide users | Tests whether guidance helps the decision | Directional improvement vs. non-users; validate with an experiment |
| Recommendation-assisted conversion | Sessions that interact with a recommendation and later add a recommended item ÷ recommendation sessions | Tests whether Lab tools help discovery rather than just attract clicks | Establish baseline first; no numeric target until quality and exposure are defined |
| Return rate due to fit | Orders returned with a fit/size reason ÷ fulfilled orders | Guardrail for size recommendations and size guidance | Do not increase versus control; target only after reliable reason codes exist |
| Checkout error rate | Checkout attempts with a blocking error ÷ checkout attempts | Protects reliability while optimizing completion | No increase; investigate every high-severity payment/ordering error |

### Instrumentation plan

The current app does not send analytics events. A production measurement plan should define a stable anonymous session/user identifier, consent and retention rules, event ownership, and event schemas before implementation.

Suggested events:

- `collection_viewed`, `shop_viewed`, `filter_applied`, `sort_changed`
- `search_submitted`, `search_result_clicked`, `search_no_results`
- `product_viewed`, `size_guide_opened`, `size_selected`, `add_to_bag`
- `bag_viewed`, `quantity_changed`, `item_removed`, `checkout_started`
- `checkout_validation_failed`, `order_completed`
- `lab_tool_opened`, `recommendation_shown`, `recommendation_item_clicked`

Useful properties include product/category/collection identifiers, selected size, filter values, result count, referral surface, and experiment variant. Avoid sending raw search text, uploaded images, contact details, or other sensitive personal data unless there is a clearly justified, consented, and reviewed need.

### Experiment approach

1. Instrument the existing journey and validate event quality before comparing variants.
2. Interview shoppers and run moderated usability sessions to identify where discovery, sizing, or checkout feels uncertain.
3. Test one change at a time—for example, clearer size guidance or collection-led recommendations—against the existing experience.
4. Choose a primary metric in advance and monitor guardrails such as returns, errors, page performance, and accessibility.
5. Segment results only where there is a sound product reason; do not declare a winner from small or unrepresentative samples.

## Prioritization

1. **P0 — Commerce journey correctness:** real catalog/inventory, reliable bag state, accessible product selection, order and payment integration, and clear error handling.
2. **P1 — Reduce purchase uncertainty:** validated sizing guidance, accurate delivery/returns information, and fit-related feedback loops.
3. **P2 — Improve discovery:** instrumented search, collection/filter usability, and recommendations evaluated against discovery and conversion outcomes.
4. **P3 — Expand the Lab:** build only the tools supported by user evidence; evaluate privacy, feasibility, and ongoing operational cost before launch.

This order prioritizes a trustworthy purchase experience over adding novelty features before their value is demonstrated.

## Technical implementation in this repository

- **UI:** React 18 with TypeScript, Vite, Tailwind CSS, and Lucide icons.
- **Navigation:** React Router routes for home, shop, product, bag, checkout, wishlist, and the Lab.
- **State:** Zustand stores bag items and persists them in browser storage under `bear-house-cart`.
- **Data:** A small hard-coded product/collection catalog in `src/App.tsx`; no API or database is connected.
- **Checkout and account:** Demo-only client-side interactions; no authentication, payment processing, order creation, or customer-data service.
- **Media tools:** Uploaded-image preview uses a browser object URL; image analysis is not implemented.
- **Analytics:** No event collection or experimentation framework is currently wired.

### Important prototype limitations

- Product inventory, price-drop alerts, rewards, store stock, and community vote percentages are illustrative/local state, not shared or live data.
- The wishlist route is an empty-state placeholder.
- Account sign-in only demonstrates a form and does not authenticate.
- Checkout confirmation is local UI state and must not be mistaken for a placed order or payment.
- Recommendations, virtual try-on, image search, and size suggestions are static demo behavior.
- Production use requires backend APIs, validation, authorization, privacy/security review, accessibility testing, and robust failure handling.

## Customer benefits to validate

- **Faster discovery:** curated collections and relevant search/filter options can reduce time spent browsing.
- **More confident decisions:** product context and useful fit guidance can help shoppers choose the right item and size.
- **More coherent outfits:** complementary-product suggestions can make it easier to assemble a look.
- **A more expressive brand experience:** customization and community concepts can give shoppers a way to participate, if research shows they value it.
- **Clearer purchase journey:** a visible bag and checkout flow can reduce uncertainty before purchase.

These are intended benefits, not measured outcomes. Validate them through user research and the KPI plan above.

## Running locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Resume-ready project framing

Use only claims that match work and evidence you can personally verify. A truthful starting point for this repository is:

> Designed a responsive menswear commerce prototype with collection-led discovery, product sizing, persistent cart state, and a concept styling lab; defined a KPI and instrumentation plan to test discovery, add-to-bag, and checkout hypotheses.

Add user research, usage volumes, conversion changes, or business outcomes only after conducting the work and measuring the results.

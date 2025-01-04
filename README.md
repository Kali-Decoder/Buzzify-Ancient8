<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=1000&size=55&pause=1000&center=true&vCenter=true&width=1000&lines=BuzziFy;  Predict+Bet+Earn+Rewards" alt="Typing SVG" /></a>
<br/> <br/> 
![c79a33af-ccb8-4f41-a434-83ac9298e3f6](https://github.com/user-attachments/assets/51d01ffc-9824-41a0-834c-822dc244b5c7)

 <br/> <br/>
# BuzziFy

### Prediction markets like Polymarket have skyrocketed in usage this year thanks to politics and sports betting. But what if there was a prediction market focused on social media and the internet arena?

### We are building a platform over to facilitate you to bet on your favorite content creator and its growth. With our unique score calculation, you can predict what score he gains - this unique score will provide a more decentralized and trusted environment for the users to bet. By just predicting what score the creator gets you can bet your amount and earn your share from the pool amount if you strike it correctly.**

## Key Features
### Here are the BuzzyFI features in point form:

- **Monetize Your Existing Reels:** Turn your current reels into revenue-generating content.
- **Upload Custom Reels:** Share and monetize your own custom-created reels.
- **Invest in Favorite Creators' Reels:** Place an investment amount on your favorite content creators' reels for a specific tenure.
- **Withdraw Rewards:** Redeem your earnings once the investment tenure is complete.
- **Earn BuzziFy Tokens:** Gain BuzziFy tokens through a "Refer and Earn" program.

## Technical Architecture
<img width="1214" alt="Screenshot 2024-08-07 at 10 07 16 AM" src="https://quickest-reaction-568.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F12ef41c4-7fad-45c1-9929-2146ee112899%2Fa205bfa7-9207-459f-9792-966cc5e6d325%2FScreenshot_2024-09-26_162333.png?table=block&id=67b94f75-748f-4d7d-8219-41f47fdd1415&spaceId=12ef41c4-7fad-45c1-9929-2146ee112899&width=1420&userId=&cache=v2">

<a href="https://excalidraw.com/#json=2IszvIRZKWLMC_SnU6xDN,Ko3NXJEpdHlUn-X2P7jGTA">View Archtecuture</a>

## TechStack

- Next.js
- Typescript
- Tailwind CSS
- Solidity
- Ancient8 Testnet Network 



## Challenges and Solution
- Inadequate Rewards for User Engagement
    - Problem: Despite contributing valuable content and engagement, users receive little to no tangible rewards for their participation on most social media platforms.
- Barrier to Monetization for Small Creators
    - Many small creators struggle to monetize their content effectively due to high entry barriers and the dominance of established influencers.
- Time and Effort Not Valued
    - Users spend significant time and effort creating and engaging with content but often feel that their contributions are undervalued.


## CREATOR PLATFORM TRACK

- **1. Ancient8 Testnet:** <br/>
  - BuzziFy Buzz Token(Contract Address ): 0x394b899AAb17EfCF200AA3F9ce12F6fDf740E6Aa) :
    https://scanv2-testnet.ancient8.gg/address/0x394b899AAb17EfCF200AA3F9ce12F6fDf740E6Aa

  - BuzziFy (Contract Address ): 0x1C466fab497CC9132A2Ea8FB2dF22E87740b2042):
    https://scanv2-testnet.ancient8.gg/address/0x1C466fab497CC9132A2Ea8FB2dF22E87740b2042


## Contract Overview : 

| **Function**                | **Visibility** | **Parameters**                                                                 | **Explanation**                                                                                                                                                                                                                                    |
|-----------------------------|----------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `constructor(address _token)`| `external`     | `_token`: address of the ERC20 token to be used for betting                    | Initializes the contract by setting the token address and the owner to the message sender.                                                                                                                                                        |
| `createPool()`               | `external`     | None                                                                          | Allows the owner to create a new betting pool with a specified end time (5 minutes from creation). The pool is assigned an ID, and the pool's initial parameters (amount, bets, end time) are set.                                                  |
| `placeBet(uint256 _amount, uint256 _targetScore, uint256 _pool_id)`| `external` | `_amount`: amount of tokens to bet, `_targetScore`: predicted score, `_pool_id`: ID of the pool| Allows users to place a bet on a specific pool by providing the amount of tokens and target score. The bet is only accepted if it’s within the pool's betting period, and users haven't already placed a bet. Transfers tokens to the contract.     |
| `setResult(uint256 _pool_id, uint256 _finalScore)` | `external`    | `_pool_id`: ID of the pool, `_finalScore`: final score of the pool             | Allows the owner to set the final result of the pool after the betting period ends. This function ends the pool and initiates the reward calculation for the bets based on their accuracy.                                                          |
| `_calculationReward(uint256 _pool_id)` | `private`      | `_pool_id`: ID of the pool                                                   | Calculates the reward for each bet based on its accuracy compared to the final score. Uses a weighted accuracy formula to proportionally distribute rewards from the pool among participants.                                                      |
| `claimBet(uint _pool_id)`    | `external`     | `_pool_id`: ID of the pool                                                    | Allows users to claim their reward if they placed a bet in the pool and their claimable reward is greater than zero. Ensures that the pool has ended before claiming. Tokens are transferred to the user upon successful claim.                    |
| `withdraw(uint256 amount, address _receiver)` | `external`    | `amount`: amount to withdraw, `_receiver`: address to receive the funds        | Allows the owner to withdraw unclaimed tokens from the contract. Transfers a specified amount of tokens to a designated receiver address.                                                                                                          |

## Key Concepts
- **Betting Pools**: A pool where users can place bets based on their prediction of a score.
- **Bet**: Contains user info, bet amount, target score, and whether the bet has been claimed.
- **Final Score**: The actual outcome of the event, which is compared to users' target scores.
- **Reward Calculation**: Based on the accuracy of users' predictions, with more accurate bets getting a higher portion of the total pool.

## Events

- **BetPlaced**: Emitted when a user places a bet in a pool.
- **BetClaimed**: Emitted when a user successfully claims their reward.



### Platform UI 
<img width="1467" alt="Screenshot 2025-01-04 at 4 09 19 PM" src="https://github.com/user-attachments/assets/7711ec31-0fbd-48ae-9f24-3eedeb29ea28" />
<img width="1459" alt="Screenshot 2025-01-04 at 4 09 39 PM" src="https://github.com/user-attachments/assets/a0ed6416-58fe-4e38-aa31-6542e2fd6f03" />
<img width="1470" alt="Screenshot 2025-01-04 at 4 09 46 PM" src="https://github.com/user-attachments/assets/2c30d99f-abb5-4e68-baee-c9de75157b78" />
<img width="1470" alt="Screenshot 2025-01-04 at 4 11 10 PM" src="https://github.com/user-attachments/assets/6c730245-0234-4f16-a87d-56ee2469e941" />
<img width="1470" alt="Screenshot 2025-01-04 at 4 10 09 PM" src="https://github.com/user-attachments/assets/cef887bd-7015-40ae-8c8e-5b027fd1a73a" />
<img width="1470" alt="Screenshot 2025-01-04 at 4 10 00 PM" src="https://github.com/user-attachments/assets/92265fd0-01bb-4832-9479-da149af39dfd" />












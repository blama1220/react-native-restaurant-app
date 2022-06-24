import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer WTry4ks1pRlZn1_fVsavJ3nW6rZfMSd0u7wAIslQyOP3CHQcu_1vNqSBoF0KnILU8cr6sSgDSZDzcL30BtElF9UBWA5_9wLCyNZ19WevukVJV2N8bkYF-IQERRuyYnYx",
  },
});

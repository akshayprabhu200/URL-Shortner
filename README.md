# URL-Shortner

## Hashing Algorithm
The **DJB2** hashing algorithm was used as it's a hash function is similar to a Linear Congruential Generator. It was faster than algorithms like SHA1 and also prevents collisions to some extent. It is an algorithm produced by Professor Daniel J. Bernstein

```javascript
function djb2(str) {
 let len = str.length
 let h = 5381

 for (let i = 0; i < len; i++) {
   h = h * 33 ^ str.charCodeAt(i)
  }
  return h >>> 0
}
```
The numbers chosen for the hash are supposed to be relatively prime. 

## Explanation

The backend is written in NodeJS and Express. The `server.js` file has two routes:
- `/api/generateHash/` which defines a POST route where the frontend can POST a URL and the route uses the `djb2` middleware to first generate a hash, store it in the hashtable and then return it back to the frontend.
- `/api/decodeHash/:hashedURL` which takes a `hashedURL` and then checks the hash table to check if the hash is present, if it is then the route returns the decoded URL.

## Libraries Used
- Axios
- Express
- Nodemon
- concurrently
- react

## Test Cases

1. A hash generated of `google.com`

![](https://raw.githubusercontent.com/akshayprabhu200/URL-Shortner/master/images/1.png)

2. `1ve1kd3` being decoded again

![](https://raw.githubusercontent.com/akshayprabhu200/URL-Shortner/master/images/2.png)

3. A random value not in the hash table being decoded

![](https://raw.githubusercontent.com/akshayprabhu200/URL-Shortner/master/images/3.png)



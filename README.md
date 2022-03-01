# MOSAIC
Massive Open-Source Anti-agression Intelligence Collection is intended for civilians to be able to submit and verify intelligence items about an attacking force.

# TODO
Several items are needed for the system to launch;
* A database and hosting solution (currently IPFS is considered)
* File and text items uploading
* Peer verification
* Viewing of popular and new intelligence items
* Some kind of persistent verification and 'trustworthiness' score for users

# Architecture
The file hosting solution will likely be run as an IPFS cluster service. More info: https://cluster.ipfs.io/
Website will be served from a given node, and the database with intelligence items will be stored and shared on a separate cluster, which the feed will be loaded from. This means no node will have to store the whole feed locally to serve it, only the website. A size limit will be imposed to protect users from storage overload attack.

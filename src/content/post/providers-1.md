---
publishDate: 2025-06-10T21:00:00Z
title: (Rust) Async state management, Multiplex p2p Networking, gRPC, Websockets
excerpt: Notes of a conversation about the network architecture of a monolithic p2p service written in Rust.
tags:
  - Rust
  - Network Architecture
  - gRPC
  - Websockets
  - Multiplex
  - Multithreading
  - p2p
---

Instead of my current approach of setting up the network using a set of rt::spawn threads, as well as in using the current actix-web ecosystem, I should consider setting up a Multiplex system that will allow communication via gRPC (setting up Protobuf) as well as Websockets and an HTTP(S) REST API.

Ultimately, I'll be rewriting my monolithic application to remove the templated code I pulled from the libp2p examples so that I can structure the state management within it more appropriately (since that's what triggered this whole discussion). I'll also be switching to Axum instead of using Actix as it's closer to the Tokio ecosystem, and I don't see any real downsides for it, especially since I have some really good examples of how to structure it.

For handling the additional async threads, I'll be switching to an architecture that creates the threads and pins them to be used in the `tokio::select!` macro rather than blindly spawning them, as is implemented [in the websocket handler for disoxide](https://github.com/KBVE/kbve/blob/d50756c6bde6b0f96d3e059919ea8afb9a6a1a1d/apps/discord/disoxide/src/handler/ws.rs#L125). This should make the state management a lot more stable across the different threads. Something to note here is that this websocket handler is passing in a global state that contains the state given from the jedi temple, which seems to be including the redis pool as well as the mpsc/pubsub declarations and the `JoinHandle` for the tasks spawned from this thread. So it does have nested multithreading which is going all the way to the top and then shared with the `Arc<Mutex<_>>` which is nice.

So... a lot of work to do, but having any path forward is better than mindlessly grasping for stability.

Reference material:
- [Multiplex Service example with REST and gRPC](https://github.com/maxnachlinger/rest-grpc-reflection-multiplex/blob/main/src/multiplex_service.rs)
- [KBVE's Jedi Rust Package](https://github.com/KBVE/kbve/blob/main/packages/rust/jedi/src/state/temple.rs) that serves as an example on better async multithreaded state management. Created/used in [disoxide](https://github.com/KBVE/kbve/blob/main/apps/discord/disoxide/src/main.rs) which is an Axum-based API.
- ["Askama" page from KBVE's astro package which gets rewritten by Axum](https://github.com/KBVE/kbve/blob/main/apps/discord/astro-disoxide/src/pages/askama.astro). The rawHTMLString is rewritten on the call to basically act like server side rendering, then it's cached on the frontend to reduce API calls.
- [Axum-Connect crate](https://crates.io/crates/axum-connect) that brings the protobuf-based "Connect-Web RPC framework" (linked site down as of writing) to Rust via [Axum](https://github.com/tokio-rs/axum)
- [Tungstenite crate](https://github.com/snapview/tungstenite-rs) for websockets in Rust
- [Protobufs for KBVE's Jedi](https://github.com/KBVE/kbve/blob/main/packages/rust/jedi/proto/jedi.proto)

Additional Misc. Reference Material:
- [tonic-web-wasm-client for websockets in a wasm architecture](https://crates.io/crates/tonic-web-wasm-client) mentioned when I talked about setting up my features as modular wasms instead of as part of the monolithic application as different crates.

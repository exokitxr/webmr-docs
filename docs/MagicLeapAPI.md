---
id: MagicLeapAPI 
title: Magic Leap  API
sidebar_label: Magic Leap API
---


The Magic Leap API is exposed to sites under the `window.browser.magicleap` endpoint. This is inspired by the [WebExtension API style](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API). It is not a web standard (yet).

## Classes

### `MLMesher`

Used to acquire meshing updates from the Magic Leap platform.

#### `MLMesher.onmesh : function(MLMeshUpdate[])`

When set, `onmesh` will be called with an array of `MLBufferUpdate`. This indicates a change to the world mesh state which should be applied to the scene.

### `MLMeshUpdate`

A single update to the world mesh.

#### `MLMeshUpdate.type : String`

The type of update. Can be either:

- `'new'`: the mesh should be added to the scene.
- `'update'`: the mesh was previously emitted as `new` but its data has changed. No action is necessary, but may be desired.
- `'remove'`: the mesh is no longer in scope for the meshing system and should be discarded.

#### `MLMeshUpdate.position : WebGLBuffer`

The raw `WebGLBuffer` for the mesh positions in world space. Represented as three `WebGLFloat` per vertex. Not in any particular order; indexed by `MLMeshUpdate.index`. Tightly packed stride.

#### `MLMeshUpdate.normal : WebGLBuffer`

The raw `WebGLBuffer` for the mesh normals. Represented as three `WebGLFloat` per vertex. Not in any particular order; indexed by `MLMeshUpdate.index`. Tightly packed stride.

#### `MLMeshUpdate.index : WebGLBuffer`

The raw `WebGLBuffer` for the mesh indices for `MLMeshUpdate.position` and `MLMeshUpdate.normal`. Represented as three `WegGLShort` per triangle. Tightly packed stride.

#### `MLMeshUpdate.count : Number`

The number of indices in `MLMeshUpdate.index`. Indended to be passed to `glDrawElements(GL_TRIANGLES)`.

### `MLEyeTracker`

Used to get the current 3D eye tracking position from the Magic Leap platform.

#### `MLEyeTracker.position : Float32Array(3)`

The current position of the eye cursor, as a world vector. This is probably in front of the camera, in the negative Z.

#### `MLEyeTracker.rotation : Float32Array(4)`

The current rotation of the eye cursor, as a world quaternion. This is probably aligned with the camera direction.

### `MLPlaneTracker`

Used to receive world planes detected by the Magic Leap platform.

#### `MLPlaneTracker.onplane : function(MLPlaneUpdate[])`

When set, `onplane` will be called with an array of `MLPlaneUpdate`. This indicates an update to the planes detected by the Magic Leap platform.

An update replaces the preview plane state and may contain an entirely different set of planes than the previous update. Plane identity can be tracked via each `MLPlaneUpdate`'s `.id` property.

### `MLPlaneUpdate`

A single plane detected in the world.

#### `MLPlaneUpdate.id : String`

A unique identifier for this plane. If a plane's id is the same between updates, then it is an update to a previous plane.

#### `MLPlaneUpdate.position : Float32Array(3)`

The world position of the center of this plane.

#### `MLPlaneUpdate.rotation : Float32Array(4)`

The world quaternion of the direction of this plane. Apply this quaternion to the vector `(0, 0, 1)` to get the plane normal.

#### `MLPlaneUpdate.size : Float32Array(2)`

The size of the plane in meters.

- `size[0]` is the width (x)
- `size[1]` is the height (y)

### `MLHandTracker`

Used to acquire hand tracking updates from the Magic Leap platform.

#### `MLHandTracker.onhand : function(MLHandUpdate[])`

When set, `onhand` will be called with an array of `MLHandUpdate`. This indicates an update to the user's hand pose detected from the sensors on the Magic Leap platform.

Each hand is identified as either `'left'` or `'right'`. An update replaces the previous hand state; if a hand is not present in any given update that means it has not been detected for the given update loop.

### `MLHandUpdate`

A single update to the user's tracked hand pose state.

#### `MLHandUpdate.hand : String`

The hand direction detected for this update. Either `'left'` or `'right'`.

#### `MLHandUpdate.position : Float32Array(3)`

The center of the hand pose detected in world space, as a vector.

#### `MLHandUpdate.rotation : Float32Array(4)`

The rotation of the hand pose detected in world space, as a world quaternion. The rotation is defined as pointing in the direction of the base of the middle finger.

#### `MLHandUpdate.bones : MLHandBone[2][5][3]`

The detected hand finger bone positions. The order is right-handed, left-to-right, bottom-to-top:

```
handUpdate.bones[0][0][0] // left (0) thumb (0) base (0)
handUpdate.bones[1][0][2] // right (1) thumb (0) tip (2)
handUpdate.bones[1][1][3] // right (1) pointer (1) tip (3)
handUpdate.bones[0][4][3] // left (0) pinkie (4) tip (3)
```

Note that the thumb has one less bone than the other fingers.

### `MLHandBone`

A single hand bone detected by the hand pose tracking system.

#### `MLHandBone.position : Float32Array(3)`

The center of the hand pose detected in world space, as a vector.

#### `MLHandBone.rotation : Float32Array(4)`

The rotation of the hand pose detected in world space, as a world quaternion. The rotation is defined as towards distal.

### `MLEyeTracker`

Used to acquire eye tracking updates from the Magic Leap platform.

#### `MLEyeTracker.oneye : function(MLEye[2])`

When set, `oneye` will be called with an array of `MLEyeUpdate`. This indicates an update to the user's detected eye post by the Magic Leap platform.

Both eyes are present in all updates.

### `MLEye`

A single eye state as detected by the platform.

### `MLEye.fixation : Float32Array(3)`

The 3D world position of the combined eyes fixation.

The fixation value is the same for both eyes, since it is sourced from both eyes.

### `MLEye.origin : Float32Array(3)`

The world position of the eye origin as a vector. This is the origin position of the eye, not where it is looking.

### `MLEye.rotation : Float32Array(4)`

The rotation of the eye origin as a world quaternion.

> Do not use this for checking where the eye is looking; that is what `fixation` is for.

### `MLEye.blink : Boolean`

Whether this eye is currently blinking closed (`true`) or not (`false`).

## Endpoints

#### `browser.magicleap.RequestMeshing() : MLMesher`

Returns an instance of `MLMesher`, which can be used to receive world meshing buffer updates from the Magic Leap platform.

#### `browser.magicleap.RequestPlaneTracker() : MLPlaneTracker`

Returns an instance of `MLPlaneTracker`, which can be used to receive world planes detected by the Magic Leap platform.

#### `browser.magicleap.RequestHandTracking() : MLHandTracker`

Returns an instance of `MLHandTracker`, which can be used to receive hand tracking data from the Magic Leap platform.

#### `browser.magicleap.RequestEyeTracking() : MLEyeTracker`

Returns an instance of `MLEyeTracker`, which can be used to receive eye tracking data from the Magic Leap platform.

#### `browser.magicleap.PopulateDepth(populateDepth : Boolean)`

Sets whether the render loop will populate the depth buffer by using the meshing subsystem.

This is a fast way of doing world occlusion without any extra code.

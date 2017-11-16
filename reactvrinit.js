uniquelyNamedGlobalVariableUsedToRemoveReactVRLoader.removeLoader();
// Initialize the React VR application
ReactVR.init(
  // When you're ready to deploy your app, update this line to point to
  // your compiled index.bundle.js
  './index.bundle.js?platform=vr',
  document.body,
  {},
  [ './static_assets/Air_Balloon.mtl',
    './static_assets/Air_Balloon.obj',
    './static_assets/lake-medium.jpg',
    './static_assets/lake-large.jpg',
    './static_assets/Low-Poly_airship.mtl',
    './static_assets/Low-Poly_airship.obj',
  ]
);

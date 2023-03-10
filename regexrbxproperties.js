const fs = require('fs');
const regex = /(^.*	Property.*$)/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(^.*	Property.*$)', 'gm')

const str = `Class Instance [notbrowsable]
	Property bool Instance.Archivable
	Property string Instance.ClassName [readonly]
	Property int Instance.DataCost [readonly] [LocalUserSecurity]
	Property string Instance.Name
	Property Class:Instance Instance.Parent
	Property bool Instance.RobloxLocked [PluginSecurity]
	Property bool Instance.archivable [deprecated] [hidden]
	Property string Instance.className [deprecated] [readonly]
	Function void Instance:ClearAllChildren()
	Function Instance Instance:Clone()
	Function void Instance:Destroy()
	Function Instance Instance:FindFirstAncestor(string name)
	Function Instance Instance:FindFirstAncestorOfClass(string className)
	Function Instance Instance:FindFirstAncestorWhichIsA(string className)
	Function Instance Instance:FindFirstChild(string name, bool recursive = false)
	Function Instance Instance:FindFirstChildOfClass(string className)
	Function Instance Instance:FindFirstChildWhichIsA(string className, bool recursive = false)
	Function Objects Instance:GetChildren()
	Function string Instance:GetDebugId(int scopeLength = 4) [notbrowsable] [PluginSecurity]
	Function Array Instance:GetDescendants()
	Function string Instance:GetFullName()
	Function EventInstance Instance:GetPropertyChangedSignal(string property)
	Function bool Instance:IsA(string className)
	Function bool Instance:IsAncestorOf(Instance descendant)
	Function bool Instance:IsDescendantOf(Instance ancestor)
	Function void Instance:Remove() [deprecated]
	Function Instance Instance:WaitForChild(string childName, double timeOut)
	Function Objects Instance:children() [deprecated]
	Function Instance Instance:clone() [deprecated]
	Function void Instance:destroy() [deprecated]
	Function Instance Instance:findFirstChild(string name, bool recursive = false) [deprecated]
	Function Objects Instance:getChildren() [deprecated]
	Function bool Instance:isA(string className) [deprecated]
	Function bool Instance:isDescendantOf(Instance ancestor) [deprecated]
	Function void Instance:remove() [deprecated]
	Event Instance.AncestryChanged(Instance child, Instance parent)
	Event Instance.Changed(Property property)
	Event Instance.ChildAdded(Instance child)
	Event Instance.ChildRemoved(Instance child)
	Event Instance.DescendantAdded(Instance descendant)
	Event Instance.DescendantRemoving(Instance descendant)
	Event Instance.childAdded(Instance child) [deprecated]
Class Accoutrement : Instance
	Property Vector3 Accoutrement.AttachmentForward
	Property CoordinateFrame Accoutrement.AttachmentPoint
	Property Vector3 Accoutrement.AttachmentPos
	Property Vector3 Accoutrement.AttachmentRight
	Property Vector3 Accoutrement.AttachmentUp
Class Accessory : Accoutrement
Class Hat : Accoutrement [deprecated]
Class AdService : Instance [notCreatable]
	Function void AdService:ShowVideoAd() [deprecated]
	Event AdService.VideoAdClosed(bool adShown) [deprecated]
Class AdvancedDragger : Instance
Class AnalyticsService : Instance [notCreatable]
	Function void AnalyticsService:ReleaseRBXEventStream(string target) [RobloxScriptSecurity]
	Function void AnalyticsService:ReportCounter(string counterName, int amount = 1) [RobloxScriptSecurity]
	Function void AnalyticsService:ReportInfluxSeries(string seriesName, Dictionary points, int throttlingPercentage) [RobloxScriptSecurity]
	Function void AnalyticsService:ReportStats(string category, float value) [RobloxScriptSecurity]
	Function void AnalyticsService:SendEventDeferred(string target, string eventContext, string eventName, Dictionary additionalArgs) [RobloxScriptSecurity]
	Function void AnalyticsService:SendEventImmediately(string target, string eventContext, string eventName, Dictionary additionalArgs) [RobloxScriptSecurity]
	Function void AnalyticsService:SetRBXEvent(string target, string eventContext, string eventName, Dictionary additionalArgs) [RobloxScriptSecurity]
	Function void AnalyticsService:SetRBXEventStream(string target, string eventContext, string eventName, Dictionary additionalArgs) [RobloxScriptSecurity]
	Function void AnalyticsService:TrackEvent(string category, string action, string label, int64 value = 0) [RobloxScriptSecurity]
	Function void AnalyticsService:UpdateHeartbeatObject(Dictionary args) [RobloxScriptSecurity]
Class Animation : Instance
	Property Content Animation.AnimationId
Class AnimationController : Instance
	Function Array AnimationController:GetPlayingAnimationTracks()
	Function Instance AnimationController:LoadAnimation(Instance animation)
	Event AnimationController.AnimationPlayed(Instance animationTrack)
Class AnimationTrack : Instance
	Property Class:Animation AnimationTrack.Animation [readonly]
	Property bool AnimationTrack.IsPlaying [readonly]
	Property float AnimationTrack.Length [readonly]
	Property bool AnimationTrack.Looped
	Property AnimationPriority AnimationTrack.Priority
	Property float AnimationTrack.Speed [readonly]
	Property float AnimationTrack.TimePosition
	Property float AnimationTrack.WeightCurrent [readonly]
	Property float AnimationTrack.WeightTarget [readonly]
	Function void AnimationTrack:AdjustSpeed(float speed = 1)
	Function void AnimationTrack:AdjustWeight(float weight = 1, float fadeTime = 0.100000001)
	Function double AnimationTrack:GetTimeOfKeyframe(string keyframeName)
	Function void AnimationTrack:Play(float fadeTime = 0.100000001, float weight = 1, float speed = 1)
	Function void AnimationTrack:Stop(float fadeTime = 0.100000001)
	Event AnimationTrack.DidLoop()
	Event AnimationTrack.KeyframeReached(string keyframeName)
	Event AnimationTrack.Stopped()
Class Animator : Instance
	Function Instance Animator:LoadAnimation(Instance animation)
	Function void Animator:StepAnimations(float deltaTime) [PluginSecurity]
Class AssetService : Instance
	YieldFunction int64 AssetService:CreatePlaceAsync(string placeName, int64 templatePlaceID, string description = )
	YieldFunction int64 AssetService:CreatePlaceInPlayerInventoryAsync(Instance player, string placeName, int64 templatePlaceID, string description = )
	YieldFunction Array AssetService:GetAssetIdsForPackage(int64 packageAssetId)
	YieldFunction Tuple AssetService:GetAssetThumbnailAsync(int64 assetId, Vector2 thumbnailSize, int assetType = 0) [RobloxScriptSecurity]
	YieldFunction int64 AssetService:GetCreatorAssetID(int64 creationID) [deprecated]
	YieldFunction Instance AssetService:GetGamePlacesAsync()
	YieldFunction void AssetService:SavePlaceAsync()
Class Attachment : Instance
	Property Vector3 Attachment.Axis
	Property CoordinateFrame Attachment.CFrame
	Property Vector3 Attachment.Orientation
	Property Vector3 Attachment.Position
	Property Vector3 Attachment.Rotation
	Property Vector3 Attachment.SecondaryAxis
	Property bool Attachment.Visible
	Property Vector3 Attachment.WorldAxis [readonly]
	Property CoordinateFrame Attachment.WorldCFrame [readonly]
	Property Vector3 Attachment.WorldOrientation [readonly]
	Property Vector3 Attachment.WorldPosition [readonly]
	Property Vector3 Attachment.WorldRotation [deprecated] [readonly]
	Property Vector3 Attachment.WorldSecondaryAxis [readonly]
	Function Vector3 Attachment:GetAxis()
	Function Vector3 Attachment:GetSecondaryAxis()
	Function void Attachment:SetAxis(Vector3 axis)
	Function void Attachment:SetSecondaryAxis(Vector3 axis)
Class BadgeService : Instance [notCreatable]
	YieldFunction bool BadgeService:AwardBadge(int64 userId, int64 badgeId)
	YieldFunction Dictionary BadgeService:GetBadgeInfoAsync(int64 badgeId)
	YieldFunction bool BadgeService:IsDisabled(int64 badgeId)
	YieldFunction bool BadgeService:IsLegal(int64 badgeId)
	YieldFunction bool BadgeService:UserHasBadge(int64 userId, int64 badgeId) [deprecated]
	YieldFunction bool BadgeService:UserHasBadgeAsync(int64 userId, int64 badgeId)
	Event BadgeService.BadgeAwarded(string message, int64 userId, int64 badgeId) [RobloxScriptSecurity]
Class BasePlayerGui : Instance
Class CoreGui : BasePlayerGui [notCreatable]
	Property Class:GuiObject CoreGui.SelectionImageObject [RobloxScriptSecurity]
	Property int CoreGui.Version [readonly]
	Function void CoreGui:SetUserGuiRendering(bool enabled, Instance guiAdornee, NormalId faceId) [RobloxScriptSecurity]
Class PlayerGui : BasePlayerGui [notCreatable]
	Property ScreenOrientation PlayerGui.CurrentScreenOrientation [readonly]
	Property ScreenOrientation PlayerGui.ScreenOrientation
	Property Class:GuiObject PlayerGui.SelectionImageObject
	Function float PlayerGui:GetTopbarTransparency()
	Function void PlayerGui:SetTopbarTransparency(float transparency)
	Event PlayerGui.TopbarTransparencyChangedSignal(float transparency)
Class StarterGui : BasePlayerGui
	Property bool StarterGui.ProcessUserInput [hidden] [PluginSecurity]
	Property bool StarterGui.ResetPlayerGuiOnSpawn [deprecated]
	Property ScreenOrientation StarterGui.ScreenOrientation
	Property bool StarterGui.ShowDevelopmentGui
	Function bool StarterGui:GetCoreGuiEnabled(CoreGuiType coreGuiType)
	Function void StarterGui:RegisterGetCore(string parameterName, Function getFunction) [RobloxScriptSecurity]
	Function void StarterGui:RegisterSetCore(string parameterName, Function setFunction) [RobloxScriptSecurity]
	Function void StarterGui:SetCore(string parameterName, Variant value)
	Function void StarterGui:SetCoreGuiEnabled(CoreGuiType coreGuiType, bool enabled)
	YieldFunction Variant StarterGui:GetCore(string parameterName)
	Event StarterGui.CoreGuiChangedSignal(CoreGuiType coreGuiType, bool enabled) [RobloxScriptSecurity]
Class Beam : Instance
	Property Class:Attachment Beam.Attachment0
	Property Class:Attachment Beam.Attachment1
	Property ColorSequence Beam.Color
	Property float Beam.CurveSize0
	Property float Beam.CurveSize1
	Property bool Beam.Enabled
	Property bool Beam.FaceCamera
	Property float Beam.LightEmission
	Property float Beam.LightInfluence
	Property int Beam.Segments
	Property Content Beam.Texture
	Property float Beam.TextureLength
	Property TextureMode Beam.TextureMode
	Property float Beam.TextureSpeed
	Property NumberSequence Beam.Transparency
	Property float Beam.Width0
	Property float Beam.Width1
	Property float Beam.ZOffset
	Function void Beam:SetTextureOffset(float offset = 0)
Class BindableEvent : Instance
	Function void BindableEvent:Fire(Tuple arguments)
	Event BindableEvent.Event(Tuple arguments)
Class BindableFunction : Instance
	YieldFunction Tuple BindableFunction:Invoke(Tuple arguments)
	Callback Tuple BindableFunction.OnInvoke(Tuple arguments)
Class BodyMover : Instance
Class BodyAngularVelocity : BodyMover
	Property Vector3 BodyAngularVelocity.AngularVelocity
	Property Vector3 BodyAngularVelocity.MaxTorque
	Property float BodyAngularVelocity.P
	Property Vector3 BodyAngularVelocity.angularvelocity [deprecated]
	Property Vector3 BodyAngularVelocity.maxTorque [deprecated]
Class BodyForce : BodyMover
	Property Vector3 BodyForce.Force
	Property Vector3 BodyForce.force [deprecated]
Class BodyGyro : BodyMover
	Property CoordinateFrame BodyGyro.CFrame
	Property float BodyGyro.D
	Property Vector3 BodyGyro.MaxTorque
	Property float BodyGyro.P
	Property CoordinateFrame BodyGyro.cframe [deprecated]
	Property Vector3 BodyGyro.maxTorque [deprecated]
Class BodyPosition : BodyMover
	Property float BodyPosition.D
	Property Vector3 BodyPosition.MaxForce
	Property float BodyPosition.P
	Property Vector3 BodyPosition.Position
	Property Vector3 BodyPosition.maxForce [deprecated]
	Property Vector3 BodyPosition.position [deprecated]
	Function Vector3 BodyPosition:GetLastForce()
	Function Vector3 BodyPosition:lastForce() [deprecated]
	Event BodyPosition.ReachedTarget()
Class BodyThrust : BodyMover
	Property Vector3 BodyThrust.Force
	Property Vector3 BodyThrust.Location
	Property Vector3 BodyThrust.force [deprecated]
	Property Vector3 BodyThrust.location [deprecated]
Class BodyVelocity : BodyMover
	Property Vector3 BodyVelocity.MaxForce
	Property float BodyVelocity.P
	Property Vector3 BodyVelocity.Velocity
	Property Vector3 BodyVelocity.maxForce [deprecated]
	Property Vector3 BodyVelocity.velocity [deprecated]
	Function Vector3 BodyVelocity:GetLastForce()
	Function Vector3 BodyVelocity:lastForce()
Class RocketPropulsion : BodyMover
	Property float RocketPropulsion.CartoonFactor
	Property float RocketPropulsion.MaxSpeed
	Property float RocketPropulsion.MaxThrust
	Property Vector3 RocketPropulsion.MaxTorque
	Property Class:BasePart RocketPropulsion.Target
	Property Vector3 RocketPropulsion.TargetOffset
	Property float RocketPropulsion.TargetRadius
	Property float RocketPropulsion.ThrustD
	Property float RocketPropulsion.ThrustP
	Property float RocketPropulsion.TurnD
	Property float RocketPropulsion.TurnP
	Function void RocketPropulsion:Abort()
	Function void RocketPropulsion:Fire()
	Function void RocketPropulsion:fire() [deprecated]
	Event RocketPropulsion.ReachedTarget()
Class Button : Instance
	Property bool Button.ClickableWhenViewportHidden
	Property bool Button.Enabled
	Property Content Button.Icon
	Function void Button:SetActive(bool active) [PluginSecurity]
	Event Button.Click() [PluginSecurity]
Class CacheableContentProvider : Instance
Class MeshContentProvider : CacheableContentProvider
Class SolidModelContentProvider : CacheableContentProvider
Class Camera : Instance
	Property CoordinateFrame Camera.CFrame
	Property Class:Instance Camera.CameraSubject
	Property CameraType Camera.CameraType
	Property CoordinateFrame Camera.CoordinateFrame [deprecated] [hidden]
	Property float Camera.FieldOfView
	Property CoordinateFrame Camera.Focus
	Property bool Camera.HeadLocked
	Property float Camera.HeadScale
	Property float Camera.NearPlaneZ [readonly]
	Property Vector2 Camera.ViewportSize [readonly]
	Property CoordinateFrame Camera.focus [deprecated]
	Function float Camera:GetLargestCutoffDistance(Objects ignoreList)
	Function float Camera:GetPanSpeed()
	Function Objects Camera:GetPartsObscuringTarget(Array castPoints, Objects ignoreList)
	Function CoordinateFrame Camera:GetRenderCFrame()
	Function float Camera:GetRoll()
	Function float Camera:GetTiltSpeed()
	Function void Camera:Interpolate(CoordinateFrame endPos, CoordinateFrame endFocus, float duration)
	Function void Camera:PanUnits(int units)
	Function Ray Camera:ScreenPointToRay(float x, float y, float depth = 0)
	Function void Camera:SetCameraPanMode(CameraPanMode mode = Classic)
	Function void Camera:SetRoll(float rollAngle)
	Function bool Camera:TiltUnits(int units)
	Function Ray Camera:ViewportPointToRay(float x, float y, float depth = 0)
	Function Tuple Camera:WorldToScreenPoint(Vector3 worldPoint)
	Function Tuple Camera:WorldToViewportPoint(Vector3 worldPoint)
	Function bool Camera:Zoom(float distance) [RobloxScriptSecurity]
	Event Camera.FirstPersonTransition(bool entering) [LocalUserSecurity]
	Event Camera.InterpolationFinished()
Class ChangeHistoryService : Instance [notCreatable]
	Function Tuple ChangeHistoryService:GetCanRedo() [PluginSecurity]
	Function Tuple ChangeHistoryService:GetCanUndo() [PluginSecurity]
	Function void ChangeHistoryService:Redo() [PluginSecurity]
	Function void ChangeHistoryService:ResetWaypoints() [PluginSecurity]
	Function void ChangeHistoryService:SetEnabled(bool state) [PluginSecurity]
	Function void ChangeHistoryService:SetWaypoint(string name) [PluginSecurity]
	Function void ChangeHistoryService:Undo() [PluginSecurity]
	Event ChangeHistoryService.OnRedo(string waypoint) [PluginSecurity]
	Event ChangeHistoryService.OnUndo(string waypoint) [PluginSecurity]
Class CharacterAppearance : Instance
Class BodyColors : CharacterAppearance
	Property BrickColor BodyColors.HeadColor
	Property Color3 BodyColors.HeadColor3
	Property BrickColor BodyColors.LeftArmColor
	Property Color3 BodyColors.LeftArmColor3
	Property BrickColor BodyColors.LeftLegColor
	Property Color3 BodyColors.LeftLegColor3
	Property BrickColor BodyColors.RightArmColor
	Property Color3 BodyColors.RightArmColor3
	Property BrickColor BodyColors.RightLegColor
	Property Color3 BodyColors.RightLegColor3
	Property BrickColor BodyColors.TorsoColor
	Property Color3 BodyColors.TorsoColor3
Class CharacterMesh : CharacterAppearance
	Property int64 CharacterMesh.BaseTextureId
	Property BodyPart CharacterMesh.BodyPart
	Property int64 CharacterMesh.MeshId
	Property int64 CharacterMesh.OverlayTextureId
Class Clothing : CharacterAppearance
Class Pants : Clothing
	Property Content Pants.PantsTemplate
Class Shirt : Clothing
	Property Content Shirt.ShirtTemplate
Class ShirtGraphic : CharacterAppearance
	Property Content ShirtGraphic.Graphic
Class Skin : CharacterAppearance [deprecated]
	Property BrickColor Skin.SkinColor
Class Chat : Instance [notCreatable]
	Property bool Chat.LoadDefaultChat [ScriptWriteRestricted: [NotAccessibleSecurity]]
	Function void Chat:Chat(Instance partOrCharacter, string message, ChatColor color = Blue)
	Function void Chat:ChatLocal(Instance partOrCharacter, string message, ChatColor color = Blue) [RobloxScriptSecurity]
	Function bool Chat:GetShouldUseLuaChat() [RobloxScriptSecurity]
	Function Tuple Chat:InvokeChatCallback(ChatCallbackType callbackType, Tuple callbackArguments)
	Function void Chat:RegisterChatCallback(ChatCallbackType callbackType, Function callbackFunction)
	YieldFunction bool Chat:CanUserChatAsync(int64 userId)
	YieldFunction bool Chat:CanUsersChatAsync(int64 userIdFrom, int64 userIdTo)
	YieldFunction string Chat:FilterStringAsync(string stringToFilter, Instance playerFrom, Instance playerTo)
	YieldFunction string Chat:FilterStringForBroadcast(string stringToFilter, Instance playerFrom)
	YieldFunction string Chat:FilterStringForPlayerAsync(string stringToFilter, Instance playerToFilterFor) [deprecated]
	Event Chat.Chatted(Instance part, string message, ChatColor color)
Class ClickDetector : Instance
	Property Content ClickDetector.CursorIcon
	Property float ClickDetector.MaxActivationDistance
	Event ClickDetector.MouseClick(Instance playerWhoClicked)
	Event ClickDetector.MouseHoverEnter(Instance playerWhoHovered)
	Event ClickDetector.MouseHoverLeave(Instance playerWhoHovered)
	Event ClickDetector.RightMouseClick(Instance playerWhoClicked)
	Event ClickDetector.mouseClick(Instance playerWhoClicked) [deprecated]
Class ClusterPacketCache : Instance [notCreatable]
Class CollectionService : Instance
	Function void CollectionService:AddTag(Instance instance, string tag)
	Function Objects CollectionService:GetCollection(string class) [deprecated]
	Function EventInstance CollectionService:GetInstanceAddedSignal(string tag)
	Function EventInstance CollectionService:GetInstanceRemovedSignal(string tag)
	Function Objects CollectionService:GetTagged(string tag)
	Function Array CollectionService:GetTags(Instance instance)
	Function bool CollectionService:HasTag(Instance instance, string tag)
	Function void CollectionService:RemoveTag(Instance instance, string tag)
	Event CollectionService.ItemAdded(Instance instance) [deprecated]
	Event CollectionService.ItemRemoved(Instance instance) [deprecated]
Class Configuration : Instance
Class Constraint : Instance
	Property Class:Attachment Constraint.Attachment0
	Property Class:Attachment Constraint.Attachment1
	Property BrickColor Constraint.Color
	Property bool Constraint.Enabled
	Property bool Constraint.Visible
Class AlignOrientation : Constraint
	Property float AlignOrientation.MaxAngularVelocity
	Property float AlignOrientation.MaxTorque
	Property bool AlignOrientation.PrimaryAxisOnly
	Property bool AlignOrientation.ReactionTorqueEnabled
	Property float AlignOrientation.Responsiveness
	Property bool AlignOrientation.RigidityEnabled
Class AlignPosition : Constraint
	Property bool AlignPosition.ApplyAtCenterOfMass
	Property float AlignPosition.MaxForce
	Property float AlignPosition.MaxVelocity
	Property bool AlignPosition.ReactionForceEnabled
	Property float AlignPosition.Responsiveness
	Property bool AlignPosition.RigidityEnabled
Class BallSocketConstraint : Constraint
	Property bool BallSocketConstraint.LimitsEnabled
	Property float BallSocketConstraint.Radius
	Property float BallSocketConstraint.Restitution
	Property bool BallSocketConstraint.TwistLimitsEnabled
	Property float BallSocketConstraint.TwistLowerAngle
	Property float BallSocketConstraint.TwistUpperAngle
	Property float BallSocketConstraint.UpperAngle
Class HingeConstraint : Constraint
	Property ActuatorType HingeConstraint.ActuatorType
	Property float HingeConstraint.AngularSpeed
	Property float HingeConstraint.AngularVelocity
	Property float HingeConstraint.CurrentAngle [readonly]
	Property bool HingeConstraint.LimitsEnabled
	Property float HingeConstraint.LowerAngle
	Property float HingeConstraint.MotorMaxAcceleration
	Property float HingeConstraint.MotorMaxTorque
	Property float HingeConstraint.Radius
	Property float HingeConstraint.Restitution
	Property float HingeConstraint.ServoMaxTorque
	Property float HingeConstraint.TargetAngle
	Property float HingeConstraint.UpperAngle
Class LineForce : Constraint
	Property bool LineForce.ApplyAtCenterOfMass
	Property bool LineForce.InverseSquareLaw
	Property float LineForce.Magnitude
	Property float LineForce.MaxForce
	Property bool LineForce.ReactionForceEnabled
Class RodConstraint : Constraint
	Property float RodConstraint.CurrentDistance [readonly]
	Property float RodConstraint.Length
	Property float RodConstraint.Thickness
Class RopeConstraint : Constraint
	Property float RopeConstraint.CurrentDistance [readonly]
	Property float RopeConstraint.Length
	Property float RopeConstraint.Restitution
	Property float RopeConstraint.Thickness
Class SlidingBallConstraint : Constraint
	Property ActuatorType SlidingBallConstraint.ActuatorType
	Property float SlidingBallConstraint.CurrentPosition [readonly]
	Property bool SlidingBallConstraint.LimitsEnabled
	Property float SlidingBallConstraint.LowerLimit
	Property float SlidingBallConstraint.MotorMaxAcceleration
	Property float SlidingBallConstraint.MotorMaxForce
	Property float SlidingBallConstraint.Restitution
	Property float SlidingBallConstraint.ServoMaxForce
	Property float SlidingBallConstraint.Size
	Property float SlidingBallConstraint.Speed
	Property float SlidingBallConstraint.TargetPosition
	Property float SlidingBallConstraint.UpperLimit
	Property float SlidingBallConstraint.Velocity
Class CylindricalConstraint : SlidingBallConstraint
	Property ActuatorType CylindricalConstraint.AngularActuatorType
	Property bool CylindricalConstraint.AngularLimitsEnabled
	Property float CylindricalConstraint.AngularRestitution
	Property float CylindricalConstraint.AngularSpeed
	Property float CylindricalConstraint.AngularVelocity
	Property float CylindricalConstraint.CurrentAngle [readonly]
	Property float CylindricalConstraint.InclinationAngle
	Property float CylindricalConstraint.LowerAngle
	Property float CylindricalConstraint.MotorMaxAngularAcceleration
	Property float CylindricalConstraint.MotorMaxTorque
	Property bool CylindricalConstraint.RotationAxisVisible
	Property float CylindricalConstraint.ServoMaxTorque
	Property float CylindricalConstraint.TargetAngle
	Property float CylindricalConstraint.UpperAngle
	Property Vector3 CylindricalConstraint.WorldRotationAxis [readonly]
Class PrismaticConstraint : SlidingBallConstraint
Class SpringConstraint : Constraint
	Property float SpringConstraint.Coils
	Property float SpringConstraint.CurrentLength [readonly]
	Property float SpringConstraint.Damping
	Property float SpringConstraint.FreeLength
	Property bool SpringConstraint.LimitsEnabled
	Property float SpringConstraint.MaxForce
	Property float SpringConstraint.MaxLength
	Property float SpringConstraint.MinLength
	Property float SpringConstraint.Radius
	Property float SpringConstraint.Stiffness
	Property float SpringConstraint.Thickness
Class Torque : Constraint
	Property ActuatorRelativeTo Torque.RelativeTo
	Property Vector3 Torque.Torque
Class VectorForce : Constraint
	Property bool VectorForce.ApplyAtCenterOfMass
	Property Vector3 VectorForce.Force
	Property ActuatorRelativeTo VectorForce.RelativeTo
Class ContentProvider : Instance
	Property string ContentProvider.BaseUrl [readonly]
	Property int ContentProvider.RequestQueueSize [readonly]
	Function void ContentProvider:Preload(Content contentId) [deprecated]
	Function void ContentProvider:SetBaseUrl(string url) [LocalUserSecurity]
	YieldFunction void ContentProvider:PreloadAsync(Array contentIdList)
Class ContextActionService : Instance
	Function void ContextActionService:BindAction(string actionName, Function functionToBind, bool createTouchButton, Tuple inputTypes)
	Function void ContextActionService:BindActionAtPriority(string actionName, Function functionToBind, bool createTouchButton, int priorityLevel, Tuple inputTypes)
	Function void ContextActionService:BindActionToInputTypes(string actionName, Function functionToBind, bool createTouchButton, Tuple inputTypes) [deprecated]
	Function void ContextActionService:BindActivate(UserInputType userInputTypeForActivation, KeyCode keyCodeForActivation = Unknown)
	Function void ContextActionService:BindCoreAction(string actionName, Function functionToBind, bool createTouchButton, Tuple inputTypes) [RobloxScriptSecurity]
	Function void ContextActionService:BindCoreActionAtPriority(string actionName, Function functionToBind, bool createTouchButton, int priorityLevel, Tuple inputTypes) [RobloxScriptSecurity]
	Function Tuple ContextActionService:CallFunction(string actionName, UserInputState state, Instance inputObject) [RobloxScriptSecurity]
	Function void ContextActionService:FireActionButtonFoundSignal(string actionName, Instance actionButton) [RobloxScriptSecurity]
	Function Dictionary ContextActionService:GetAllBoundActionInfo()
	Function Dictionary ContextActionService:GetAllBoundCoreActionInfo() [RobloxScriptSecurity]
	Function Dictionary ContextActionService:GetBoundActionInfo(string actionName)
	Function Dictionary ContextActionService:GetBoundCoreActionInfo(string actionName) [RobloxScriptSecurity]
	Function string ContextActionService:GetCurrentLocalToolIcon()
	Function void ContextActionService:SetDescription(string actionName, string description)
	Function void ContextActionService:SetImage(string actionName, string image)
	Function void ContextActionService:SetPosition(string actionName, UDim2 position)
	Function void ContextActionService:SetTitle(string actionName, string title)
	Function void ContextActionService:UnbindAction(string actionName)
	Function void ContextActionService:UnbindActivate(UserInputType userInputTypeForActivation, KeyCode keyCodeForActivation = Unknown)
	Function void ContextActionService:UnbindAllActions()
	Function void ContextActionService:UnbindCoreAction(string actionName) [RobloxScriptSecurity]
	YieldFunction Instance ContextActionService:GetButton(string actionName)
	Event ContextActionService.BoundActionAdded(string actionAdded, bool createTouchButton, Dictionary functionInfoTable, bool isCore) [RobloxScriptSecurity]
	Event ContextActionService.BoundActionChanged(string actionChanged, string changeName, Dictionary changeTable) [RobloxScriptSecurity]
	Event ContextActionService.BoundActionRemoved(string actionRemoved, Dictionary functionInfoTable, bool isCore) [RobloxScriptSecurity]
	Event ContextActionService.GetActionButtonEvent(string actionName) [RobloxScriptSecurity]
	Event ContextActionService.LocalToolEquipped(Instance toolEquipped)
	Event ContextActionService.LocalToolUnequipped(Instance toolUnequipped)
Class Controller : Instance
	Function void Controller:BindButton(Button button, string caption)
	Function bool Controller:GetButton(Button button)
	Function void Controller:UnbindButton(Button button)
	Function void Controller:bindButton(Button button, string caption) [deprecated]
	Function bool Controller:getButton(Button button) [deprecated]
	Event Controller.ButtonChanged(Button button)
Class HumanoidController : Controller
Class SkateboardController : Controller
	Property float SkateboardController.Steer [readonly]
	Property float SkateboardController.Throttle [readonly]
	Event SkateboardController.AxisChanged(string axis)
Class VehicleController : Controller
Class ControllerService : Instance [notCreatable]
Class CookiesService : Instance
Class CorePackages : Instance [notCreatable]
Class CustomEvent : Instance [deprecated]
	Function Objects CustomEvent:GetAttachedReceivers()
	Function void CustomEvent:SetValue(float newValue)
	Event CustomEvent.ReceiverConnected(Instance receiver)
	Event CustomEvent.ReceiverDisconnected(Instance receiver)
Class CustomEventReceiver : Instance [deprecated]
	Property Class:Instance CustomEventReceiver.Source
	Function float CustomEventReceiver:GetCurrentValue()
	Event CustomEventReceiver.EventConnected(Instance event)
	Event CustomEventReceiver.EventDisconnected(Instance event)
	Event CustomEventReceiver.SourceValueChanged(float newValue)
Class DataModelMesh : Instance [notbrowsable]
	Property Vector3 DataModelMesh.Offset
	Property Vector3 DataModelMesh.Scale
	Property Vector3 DataModelMesh.VertexColor
Class BevelMesh : DataModelMesh [notbrowsable] [deprecated]
Class BlockMesh : BevelMesh
Class CylinderMesh : BevelMesh [deprecated]
Class FileMesh : DataModelMesh
	Property Content FileMesh.MeshId
	Property Content FileMesh.TextureId
Class SpecialMesh : FileMesh
	Property MeshType SpecialMesh.MeshType
Class DataStoreService : Instance [notCreatable]
	Property bool DataStoreService.AutomaticRetry [LocalUserSecurity]
	Property bool DataStoreService.LegacyNamingScheme [deprecated] [LocalUserSecurity]
	Function Instance DataStoreService:GetDataStore(string name, string scope = global)
	Function Instance DataStoreService:GetGlobalDataStore()
	Function Instance DataStoreService:GetOrderedDataStore(string name, string scope = global)
	Function int DataStoreService:GetRequestBudgetForRequestType(DataStoreRequestType requestType)
Class Debris : Instance
	Property int Debris.MaxItems [deprecated]
	Function void Debris:AddItem(Instance item, double lifetime = 10)
	Function void Debris:SetLegacyMaxItems(bool enabled) [LocalUserSecurity]
	Function void Debris:addItem(Instance item, double lifetime = 10) [deprecated]
Class DebugSettings : Instance [notbrowsable]
	Property int DebugSettings.DataModel [readonly]
	Property ErrorReporting DebugSettings.ErrorReporting
	Property string DebugSettings.GfxCard [readonly]
	Property int DebugSettings.InstanceCount [readonly]
	Property bool DebugSettings.IsFmodProfilingEnabled
	Property bool DebugSettings.IsScriptStackTracingEnabled
	Property int DebugSettings.JobCount [readonly]
	Property int DebugSettings.LuaRamLimit
	Property bool DebugSettings.OsIs64Bit [readonly]
	Property string DebugSettings.OsPlatform [readonly]
	Property int DebugSettings.OsPlatformId [readonly]
	Property string DebugSettings.OsVer [readonly]
	Property int DebugSettings.PlayerCount [readonly]
	Property bool DebugSettings.ReportSoundWarnings
	Property string DebugSettings.RobloxProductName [readonly]
	Property string DebugSettings.RobloxVersion [readonly]
	Property string DebugSettings.SIMD [readonly]
	Property string DebugSettings.SystemProductName [readonly]
	Property TickCountSampleMethod DebugSettings.TickCountPreciseOverride
	Property int DebugSettings.VideoMemory [readonly]
Class DebuggerBreakpoint : Instance [notCreatable]
	Property string DebuggerBreakpoint.Condition
	Property bool DebuggerBreakpoint.IsEnabled
	Property int DebuggerBreakpoint.Line [readonly]
Class DebuggerManager : Instance [notCreatable]
	Property bool DebuggerManager.DebuggingEnabled [readonly]
	Function Instance DebuggerManager:AddDebugger(Instance script)
	Function void DebuggerManager:EnableDebugging() [LocalUserSecurity]
	Function Objects DebuggerManager:GetDebuggers()
	Function void DebuggerManager:Resume()
	Function void DebuggerManager:StepIn()
	Function void DebuggerManager:StepOut()
	Function void DebuggerManager:StepOver()
	Event DebuggerManager.DebuggerAdded(Instance debugger)
	Event DebuggerManager.DebuggerRemoved(Instance debugger)
Class DebuggerWatch : Instance
	Property string DebuggerWatch.Expression
	Function void DebuggerWatch:CheckSyntax()
Class Dialog : Instance
	Property DialogBehaviorType Dialog.BehaviorType
	Property float Dialog.ConversationDistance
	Property bool Dialog.GoodbyeChoiceActive
	Property string Dialog.GoodbyeDialog
	Property bool Dialog.InUse
	Property string Dialog.InitialPrompt
	Property DialogPurpose Dialog.Purpose
	Property DialogTone Dialog.Tone
	Property float Dialog.TriggerDistance
	Property Vector3 Dialog.TriggerOffset
	Function Objects Dialog:GetCurrentPlayers()
	Function void Dialog:SetPlayerIsUsing(Instance player, bool isUsing) [RobloxScriptSecurity]
	Function void Dialog:SignalDialogChoiceSelected(Instance player, Instance dialogChoice) [RobloxScriptSecurity]
	Event Dialog.DialogChoiceSelected(Instance player, Instance dialogChoice)
Class DialogChoice : Instance
	Property bool DialogChoice.GoodbyeChoiceActive
	Property string DialogChoice.GoodbyeDialog
	Property string DialogChoice.ResponseDialog
	Property string DialogChoice.UserDialog
Class Dragger : Instance
	Function void Dragger:AxisRotate(Axis axis = X)
	Function void Dragger:MouseDown(Instance mousePart, Vector3 pointOnMousePart, Objects parts)
	Function void Dragger:MouseMove(Ray mouseRay)
	Function void Dragger:MouseUp()
Class Explosion : Instance
	Property float Explosion.BlastPressure
	Property float Explosion.BlastRadius
	Property float Explosion.DestroyJointRadiusPercent
	Property ExplosionType Explosion.ExplosionType
	Property Vector3 Explosion.Position
	Property bool Explosion.Visible
	Event Explosion.Hit(Instance part, float distance)
Class FaceInstance : Instance [notbrowsable]
	Property NormalId FaceInstance.Face
Class Decal : FaceInstance
	Property Color3 Decal.Color3
	Property float Decal.LocalTransparencyModifier [hidden]
	Property float Decal.Shiny [deprecated]
	Property float Decal.Specular [deprecated]
	Property Content Decal.Texture
	Property float Decal.Transparency
Class Texture : Decal
	Property float Texture.StudsPerTileU
	Property float Texture.StudsPerTileV
Class Feature : Instance
	Property NormalId Feature.FaceId
	Property InOut Feature.InOut
	Property LeftRight Feature.LeftRight
	Property TopBottom Feature.TopBottom
Class Hole : Feature [deprecated]
Class MotorFeature : Feature [deprecated]
Class Fire : Instance
	Property Color3 Fire.Color
	Property bool Fire.Enabled
	Property float Fire.Heat
	Property Color3 Fire.SecondaryColor
	Property float Fire.Size
	Property float Fire.size [deprecated]
Class FlagStandService : Instance
Class FlyweightService : Instance
Class CSGDictionaryService : FlyweightService
Class NonReplicatedCSGDictionaryService : FlyweightService
Class Folder : Instance
Class ForceField : Instance
	Property bool ForceField.Visible
Class FriendService : Instance [notCreatable]
	YieldFunction Array FriendService:GetPlatformFriends() [RobloxScriptSecurity]
	Event FriendService.FriendsUpdated(Array friendData) [RobloxScriptSecurity]
Class FunctionalTest : Instance [deprecated]
	Property string FunctionalTest.Description
	Function void FunctionalTest:Error(string message = )
	Function void FunctionalTest:Failed(string message = )
	Function void FunctionalTest:Pass(string message = )
	Function void FunctionalTest:Passed(string message = )
	Function void FunctionalTest:Warn(string message = )
Class GamePassService : Instance
	YieldFunction bool GamePassService:PlayerHasPass(Instance player, int64 gamePassId)
Class GameSettings : Instance [notbrowsable]
	Property string GameSettings.AdditionalCoreIncludeDirs
	Property float GameSettings.BubbleChatLifetime
	Property int GameSettings.BubbleChatMaxBubbles
	Property int GameSettings.ChatHistory
	Property int GameSettings.ChatScrollLength
	Property bool GameSettings.CollisionSoundEnabled [deprecated]
	Property float GameSettings.CollisionSoundVolume [deprecated]
	Property bool GameSettings.HardwareMouse
	Property int GameSettings.MaxCollisionSounds [deprecated]
	Property string GameSettings.OverrideStarterScript
	Property int GameSettings.ReportAbuseChatHistory
	Property bool GameSettings.SoftwareSound
	Property bool GameSettings.VideoCaptureEnabled
	Property VideoQualitySettings GameSettings.VideoQuality
	Event GameSettings.VideoRecordingChangeRequest(bool recording) [RobloxScriptSecurity]
Class GamepadService : Instance
Class Geometry : Instance
Class GlobalDataStore : Instance
	Function Connection GlobalDataStore:OnUpdate(string key, Function callback)
	YieldFunction Variant GlobalDataStore:GetAsync(string key)
	YieldFunction Variant GlobalDataStore:IncrementAsync(string key, int delta = 1)
	YieldFunction Variant GlobalDataStore:RemoveAsync(string key)
	YieldFunction void GlobalDataStore:SetAsync(string key, Variant value)
	YieldFunction Tuple GlobalDataStore:UpdateAsync(string key, Function transformFunction)
Class OrderedDataStore : GlobalDataStore
	YieldFunction Instance OrderedDataStore:GetSortedAsync(bool ascending, int pagesize, Variant minValue, Variant maxValue)
Class GoogleAnalyticsConfiguration : Instance
Class GroupService : Instance [notCreatable]
	YieldFunction Instance GroupService:GetAlliesAsync(int64 groupId)
	YieldFunction Instance GroupService:GetEnemiesAsync(int64 groupId)
	YieldFunction Variant GroupService:GetGroupInfoAsync(int64 groupId)
	YieldFunction Array GroupService:GetGroupsAsync(int64 userId)
Class GuiBase : Instance
Class GuiBase2d : GuiBase [notbrowsable]
	Property Vector2 GuiBase2d.AbsolutePosition [readonly]
	Property float GuiBase2d.AbsoluteRotation [readonly]
	Property Vector2 GuiBase2d.AbsoluteSize [readonly]
	Property bool GuiBase2d.AutoLocalize
	Property bool GuiBase2d.Localize [deprecated] [hidden]
	Property Class:LocalizationTable GuiBase2d.RootLocalizationTable
Class GuiObject : GuiBase2d [notbrowsable]
	Property bool GuiObject.Active
	Property Vector2 GuiObject.AnchorPoint
	Property BrickColor GuiObject.BackgroundColor [deprecated] [hidden]
	Property Color3 GuiObject.BackgroundColor3
	Property float GuiObject.BackgroundTransparency
	Property BrickColor GuiObject.BorderColor [deprecated] [hidden]
	Property Color3 GuiObject.BorderColor3
	Property int GuiObject.BorderSizePixel
	Property bool GuiObject.ClipsDescendants
	Property bool GuiObject.Draggable [deprecated]
	Property int GuiObject.LayoutOrder
	Property Class:GuiObject GuiObject.NextSelectionDown
	Property Class:GuiObject GuiObject.NextSelectionLeft
	Property Class:GuiObject GuiObject.NextSelectionRight
	Property Class:GuiObject GuiObject.NextSelectionUp
	Property UDim2 GuiObject.Position
	Property float GuiObject.Rotation
	Property bool GuiObject.Selectable
	Property Class:GuiObject GuiObject.SelectionImageObject
	Property UDim2 GuiObject.Size
	Property SizeConstraint GuiObject.SizeConstraint
	Property float GuiObject.Transparency [hidden]
	Property bool GuiObject.Visible
	Property int GuiObject.ZIndex
	Function bool GuiObject:TweenPosition(UDim2 endPosition, EasingDirection easingDirection = Out, EasingStyle easingStyle = Quad, float time = 1, bool override = false, Function callback = nil)
	Function bool GuiObject:TweenSize(UDim2 endSize, EasingDirection easingDirection = Out, EasingStyle easingStyle = Quad, float time = 1, bool override = false, Function callback = nil)
	Function bool GuiObject:TweenSizeAndPosition(UDim2 endSize, UDim2 endPosition, EasingDirection easingDirection = Out, EasingStyle easingStyle = Quad, float time = 1, bool override = false, Function callback = nil)
	Event GuiObject.DragBegin(UDim2 initialPosition) [deprecated]
	Event GuiObject.DragStopped(int x, int y) [deprecated]
	Event GuiObject.InputBegan(Instance input)
	Event GuiObject.InputChanged(Instance input)
	Event GuiObject.InputEnded(Instance input)
	Event GuiObject.MouseEnter(int x, int y)
	Event GuiObject.MouseLeave(int x, int y)
	Event GuiObject.MouseMoved(int x, int y)
	Event GuiObject.MouseWheelBackward(int x, int y)
	Event GuiObject.MouseWheelForward(int x, int y)
	Event GuiObject.SelectionGained()
	Event GuiObject.SelectionLost()
	Event GuiObject.TouchLongPress(Array touchPositions, UserInputState state)
	Event GuiObject.TouchPan(Array touchPositions, Vector2 totalTranslation, Vector2 velocity, UserInputState state)
	Event GuiObject.TouchPinch(Array touchPositions, float scale, float velocity, UserInputState state)
	Event GuiObject.TouchRotate(Array touchPositions, float rotation, float velocity, UserInputState state)
	Event GuiObject.TouchSwipe(SwipeDirection swipeDirection, int numberOfTouches)
	Event GuiObject.TouchTap(Array touchPositions)
Class Frame : GuiObject
	Property FrameStyle Frame.Style
Class GuiButton : GuiObject [notbrowsable]
	Property bool GuiButton.AutoButtonColor
	Property bool GuiButton.Modal
	Property bool GuiButton.Selected
	Property ButtonStyle GuiButton.Style
	Function void GuiButton:SetVerb(string verb) [RobloxScriptSecurity]
	Event GuiButton.Activated(Instance inputObject)
	Event GuiButton.MouseButton1Click()
	Event GuiButton.MouseButton1Down(int x, int y)
	Event GuiButton.MouseButton1Up(int x, int y)
	Event GuiButton.MouseButton2Click()
	Event GuiButton.MouseButton2Down(int x, int y)
	Event GuiButton.MouseButton2Up(int x, int y)
Class ImageButton : GuiButton
	Property Content ImageButton.HoverImage
	Property Content ImageButton.Image
	Property Color3 ImageButton.ImageColor3
	Property Vector2 ImageButton.ImageRectOffset
	Property Vector2 ImageButton.ImageRectSize
	Property float ImageButton.ImageTransparency
	Property bool ImageButton.IsLoaded [readonly]
	Property Content ImageButton.PressedImage
	Property ScaleType ImageButton.ScaleType
	Property Rect2D ImageButton.SliceCenter
	Property float ImageButton.SliceScale
	Property UDim2 ImageButton.TileSize
Class TextButton : GuiButton
	Property Font TextButton.Font
	Property FontSize TextButton.FontSize [deprecated]
	Property float TextButton.LineHeight
	Property string TextButton.LocalizedText [hidden] [readonly]
	Property string TextButton.Text
	Property Vector2 TextButton.TextBounds [readonly]
	Property BrickColor TextButton.TextColor [deprecated] [hidden]
	Property Color3 TextButton.TextColor3
	Property bool TextButton.TextFits [readonly]
	Property bool TextButton.TextScaled
	Property float TextButton.TextSize
	Property Color3 TextButton.TextStrokeColor3
	Property float TextButton.TextStrokeTransparency
	Property float TextButton.TextTransparency
	Property TextTruncate TextButton.TextTruncate
	Property bool TextButton.TextWrap [deprecated]
	Property bool TextButton.TextWrapped
	Property TextXAlignment TextButton.TextXAlignment
	Property TextYAlignment TextButton.TextYAlignment
	Function void TextButton:SetTextFromInput(string text) [RobloxScriptSecurity]
Class GuiLabel : GuiObject
Class ImageLabel : GuiLabel
	Property Content ImageLabel.Image
	Property Color3 ImageLabel.ImageColor3
	Property Vector2 ImageLabel.ImageRectOffset
	Property Vector2 ImageLabel.ImageRectSize
	Property float ImageLabel.ImageTransparency
	Property bool ImageLabel.IsLoaded [readonly]
	Property ScaleType ImageLabel.ScaleType
	Property Rect2D ImageLabel.SliceCenter
	Property float ImageLabel.SliceScale
	Property UDim2 ImageLabel.TileSize
Class TextLabel : GuiLabel
	Property Font TextLabel.Font
	Property FontSize TextLabel.FontSize [deprecated]
	Property float TextLabel.LineHeight
	Property string TextLabel.LocalizedText [hidden] [readonly]
	Property string TextLabel.Text
	Property Vector2 TextLabel.TextBounds [readonly]
	Property BrickColor TextLabel.TextColor [deprecated] [hidden]
	Property Color3 TextLabel.TextColor3
	Property bool TextLabel.TextFits [readonly]
	Property bool TextLabel.TextScaled
	Property float TextLabel.TextSize
	Property Color3 TextLabel.TextStrokeColor3
	Property float TextLabel.TextStrokeTransparency
	Property float TextLabel.TextTransparency
	Property TextTruncate TextLabel.TextTruncate
	Property bool TextLabel.TextWrap [deprecated]
	Property bool TextLabel.TextWrapped
	Property TextXAlignment TextLabel.TextXAlignment
	Property TextYAlignment TextLabel.TextYAlignment
	Function void TextLabel:SetTextFromInput(string text) [RobloxScriptSecurity]
Class ScrollingFrame : GuiObject
	Property Vector2 ScrollingFrame.AbsoluteWindowSize [readonly]
	Property Content ScrollingFrame.BottomImage
	Property Vector2 ScrollingFrame.CanvasPosition
	Property UDim2 ScrollingFrame.CanvasSize
	Property ElasticBehavior ScrollingFrame.ElasticBehavior
	Property ScrollBarInset ScrollingFrame.HorizontalScrollBarInset
	Property Content ScrollingFrame.MidImage
	Property Color3 ScrollingFrame.ScrollBarImageColor3
	Property float ScrollingFrame.ScrollBarImageTransparency
	Property int ScrollingFrame.ScrollBarThickness
	Property ScrollingDirection ScrollingFrame.ScrollingDirection
	Property bool ScrollingFrame.ScrollingEnabled
	Property Content ScrollingFrame.TopImage
	Property ScrollBarInset ScrollingFrame.VerticalScrollBarInset
	Property VerticalScrollBarPosition ScrollingFrame.VerticalScrollBarPosition
	Function void ScrollingFrame:ScrollToTop() [RobloxScriptSecurity]
Class TextBox : GuiObject
	Property bool TextBox.ClearTextOnFocus
	Property Font TextBox.Font
	Property FontSize TextBox.FontSize [deprecated]
	Property float TextBox.LineHeight
	Property bool TextBox.ManualFocusRelease [RobloxScriptSecurity]
	Property bool TextBox.MultiLine
	Property bool TextBox.OverlayNativeInput [RobloxScriptSecurity]
	Property Color3 TextBox.PlaceholderColor3
	Property string TextBox.PlaceholderText
	Property bool TextBox.ShowNativeInput
	Property string TextBox.Text
	Property Vector2 TextBox.TextBounds [readonly]
	Property BrickColor TextBox.TextColor [deprecated] [hidden]
	Property Color3 TextBox.TextColor3
	Property bool TextBox.TextFits [readonly]
	Property bool TextBox.TextScaled
	Property float TextBox.TextSize
	Property Color3 TextBox.TextStrokeColor3
	Property float TextBox.TextStrokeTransparency
	Property float TextBox.TextTransparency
	Property TextTruncate TextBox.TextTruncate
	Property bool TextBox.TextWrap [deprecated]
	Property bool TextBox.TextWrapped
	Property TextXAlignment TextBox.TextXAlignment
	Property TextYAlignment TextBox.TextYAlignment
	Function void TextBox:CaptureFocus()
	Function bool TextBox:IsFocused()
	Function void TextBox:ReleaseFocus(bool submitted = false)
	Function void TextBox:ResetKeyboardMode() [RobloxScriptSecurity]
	Function void TextBox:SetTextFromInput(string text) [RobloxScriptSecurity]
	Event TextBox.FocusLost(bool enterPressed, Instance inputThatCausedFocusLoss)
	Event TextBox.Focused()
Class LayerCollector : GuiBase2d [notbrowsable]
	Property bool LayerCollector.Enabled
	Property bool LayerCollector.ResetOnSpawn
	Property ZIndexBehavior LayerCollector.ZIndexBehavior
Class BillboardGui : LayerCollector
	Property bool BillboardGui.Active
	Property Class:Instance BillboardGui.Adornee
	Property bool BillboardGui.AlwaysOnTop
	Property bool BillboardGui.ClipsDescendants
	Property Vector3 BillboardGui.ExtentsOffset
	Property Vector3 BillboardGui.ExtentsOffsetWorldSpace
	Property float BillboardGui.LightInfluence
	Property float BillboardGui.MaxDistance
	Property Class:Instance BillboardGui.PlayerToHideFrom
	Property UDim2 BillboardGui.Size
	Property Vector2 BillboardGui.SizeOffset
	Property Vector3 BillboardGui.StudsOffset
	Property Vector3 BillboardGui.StudsOffsetWorldSpace
Class PluginGui : LayerCollector [notCreatable]
	Property string PluginGui.Title
	Function void PluginGui:BindToClose(Function function = nil)
	Function Vector2 PluginGui:GetRelativeMousePosition() [PluginSecurity]
	Event PluginGui.PluginDragDropped(Instance pluginDragEvent) [RobloxScriptSecurity]
	Event PluginGui.PluginDragEntered(Instance pluginDragEvent) [RobloxScriptSecurity]
	Event PluginGui.PluginDragLeft(Instance pluginDragEvent) [RobloxScriptSecurity]
	Event PluginGui.PluginDragMoved(Instance pluginDragEvent) [RobloxScriptSecurity]
	Event PluginGui.WindowFocusReleased() [PluginSecurity]
	Event PluginGui.WindowFocused() [PluginSecurity]
Class DockWidgetPluginGui : PluginGui [notCreatable]
	Property bool DockWidgetPluginGui.HostWidgetWasRestored [readonly]
Class QWidgetPluginGui : PluginGui [notCreatable]
Class ScreenGui : LayerCollector
	Property int ScreenGui.DisplayOrder
	Property bool ScreenGui.IgnoreGuiInset
	Property bool ScreenGui.OnTopOfCoreBlur [hidden] [RobloxScriptSecurity]
Class GuiMain : ScreenGui [deprecated]
Class SurfaceGui : LayerCollector
	Property bool SurfaceGui.Active
	Property Class:Instance SurfaceGui.Adornee
	Property bool SurfaceGui.AlwaysOnTop
	Property Vector2 SurfaceGui.CanvasSize
	Property bool SurfaceGui.ClipsDescendants
	Property NormalId SurfaceGui.Face
	Property float SurfaceGui.LightInfluence
	Property float SurfaceGui.ToolPunchThroughDistance
	Property float SurfaceGui.ZOffset
Class GuiBase3d : GuiBase
	Property BrickColor GuiBase3d.Color [deprecated] [hidden]
	Property Color3 GuiBase3d.Color3
	Property float GuiBase3d.Transparency
	Property bool GuiBase3d.Visible
Class FloorWire : GuiBase3d [deprecated]
	Property float FloorWire.CycleOffset
	Property Class:BasePart FloorWire.From
	Property float FloorWire.StudsBetweenTextures
	Property Content FloorWire.Texture
	Property Vector2 FloorWire.TextureSize
	Property Class:BasePart FloorWire.To
	Property float FloorWire.Velocity
	Property float FloorWire.WireRadius
Class PVAdornment : GuiBase3d
	Property Class:PVInstance PVAdornment.Adornee
Class HandleAdornment : PVAdornment
	Property bool HandleAdornment.AlwaysOnTop
	Property CoordinateFrame HandleAdornment.CFrame
	Property Vector3 HandleAdornment.SizeRelativeOffset
	Property int HandleAdornment.ZIndex
	Event HandleAdornment.MouseButton1Down()
	Event HandleAdornment.MouseButton1Up()
	Event HandleAdornment.MouseEnter()
	Event HandleAdornment.MouseLeave()
Class BoxHandleAdornment : HandleAdornment
	Property Vector3 BoxHandleAdornment.Size
Class ConeHandleAdornment : HandleAdornment
	Property float ConeHandleAdornment.Height
	Property float ConeHandleAdornment.Radius
Class CylinderHandleAdornment : HandleAdornment
	Property float CylinderHandleAdornment.Height
	Property float CylinderHandleAdornment.Radius
Class ImageHandleAdornment : HandleAdornment
	Property Content ImageHandleAdornment.Image
	Property Vector2 ImageHandleAdornment.Size
Class LineHandleAdornment : HandleAdornment
	Property float LineHandleAdornment.Length
	Property float LineHandleAdornment.Thickness
Class SphereHandleAdornment : HandleAdornment
	Property float SphereHandleAdornment.Radius
Class ParabolaAdornment : PVAdornment
	Property float ParabolaAdornment.A [RobloxScriptSecurity]
	Property float ParabolaAdornment.B [RobloxScriptSecurity]
	Property float ParabolaAdornment.C [RobloxScriptSecurity]
	Property float ParabolaAdornment.Range [RobloxScriptSecurity]
	Property float ParabolaAdornment.Thickness [RobloxScriptSecurity]
	Function Tuple ParabolaAdornment:FindPartOnParabola(Objects ignoreDescendentsTable) [RobloxScriptSecurity]
Class SelectionBox : PVAdornment
	Property float SelectionBox.LineThickness
	Property BrickColor SelectionBox.SurfaceColor [deprecated] [hidden]
	Property Color3 SelectionBox.SurfaceColor3
	Property float SelectionBox.SurfaceTransparency
Class SelectionSphere : PVAdornment
	Property BrickColor SelectionSphere.SurfaceColor [deprecated] [hidden]
	Property Color3 SelectionSphere.SurfaceColor3
	Property float SelectionSphere.SurfaceTransparency
Class PartAdornment : GuiBase3d
	Property Class:BasePart PartAdornment.Adornee
Class HandlesBase : PartAdornment
Class ArcHandles : HandlesBase
	Property Axes ArcHandles.Axes
	Event ArcHandles.MouseButton1Down(Axis axis)
	Event ArcHandles.MouseButton1Up(Axis axis)
	Event ArcHandles.MouseDrag(Axis axis, float relativeAngle, float deltaRadius)
	Event ArcHandles.MouseEnter(Axis axis)
	Event ArcHandles.MouseLeave(Axis axis)
Class Handles : HandlesBase
	Property Faces Handles.Faces
	Property HandlesStyle Handles.Style
	Event Handles.MouseButton1Down(NormalId face)
	Event Handles.MouseButton1Up(NormalId face)
	Event Handles.MouseDrag(NormalId face, float distance)
	Event Handles.MouseEnter(NormalId face)
	Event Handles.MouseLeave(NormalId face)
Class SurfaceSelection : PartAdornment
	Property NormalId SurfaceSelection.TargetSurface
Class SelectionLasso : GuiBase3d
	Property Class:Humanoid SelectionLasso.Humanoid
Class SelectionPartLasso : SelectionLasso [deprecated]
	Property Class:BasePart SelectionPartLasso.Part
Class SelectionPointLasso : SelectionLasso [deprecated]
	Property Vector3 SelectionPointLasso.Point
Class GuiItem : Instance
Class Backpack : GuiItem
Class BackpackItem : GuiItem
	Property Content BackpackItem.TextureId
Class HopperBin : BackpackItem [deprecated]
	Property bool HopperBin.Active
	Property BinType HopperBin.BinType
	Function void HopperBin:Disable() [RobloxScriptSecurity]
	Function void HopperBin:ToggleSelect() [RobloxScriptSecurity]
	Event HopperBin.Deselected()
	Event HopperBin.Selected(Instance mouse)
Class Tool : BackpackItem
	Property bool Tool.CanBeDropped
	Property bool Tool.Enabled
	Property CoordinateFrame Tool.Grip
	Property Vector3 Tool.GripForward
	Property Vector3 Tool.GripPos
	Property Vector3 Tool.GripRight
	Property Vector3 Tool.GripUp
	Property bool Tool.ManualActivationOnly
	Property bool Tool.RequiresHandle
	Property string Tool.ToolTip
	Function void Tool:Activate()
	Function void Tool:Deactivate()
	Event Tool.Activated()
	Event Tool.Deactivated()
	Event Tool.Equipped(Instance mouse)
	Event Tool.Unequipped()
Class Flag : Tool [deprecated]
	Property BrickColor Flag.TeamColor
Class ButtonBindingWidget : GuiItem
Class GuiRoot : GuiItem [notCreatable]
Class Hopper : GuiItem [deprecated]
Class StarterPack : GuiItem
Class GuiService : Instance [notCreatable]
	Property bool GuiService.AutoSelectGuiEnabled
	Property Class:Folder GuiService.CoreEffectFolder [hidden] [RobloxScriptSecurity]
	Property Class:Folder GuiService.CoreGuiFolder [hidden] [RobloxScriptSecurity]
	Property bool GuiService.CoreGuiNavigationEnabled
	Property bool GuiService.GuiNavigationEnabled
	Property bool GuiService.IsModalDialog [deprecated] [readonly]
	Property bool GuiService.IsWindows [deprecated] [readonly]
	Property bool GuiService.MenuIsOpen [readonly]
	Property Class:GuiObject GuiService.SelectedCoreObject [RobloxScriptSecurity]
	Property Class:GuiObject GuiService.SelectedObject
	Function void GuiService:AddCenterDialog(Instance dialog, CenterDialogType centerDialogType, Function showFunction, Function hideFunction) [RobloxScriptSecurity]
	Function void GuiService:AddKey(string key) [RobloxScriptSecurity]
	Function void GuiService:AddSelectionParent(string selectionName, Instance selectionParent)
	Function void GuiService:AddSelectionTuple(string selectionName, Tuple selections)
	Function void GuiService:AddSpecialKey(SpecialKey key) [RobloxScriptSecurity]
	Function void GuiService:BroadcastNotification(string data, int notificationType) [RobloxScriptSecurity]
	Function void GuiService:ClearError() [RobloxScriptSecurity]
	Function bool GuiService:CloseStatsBasedOnInputString(string input) [RobloxScriptSecurity]
	Function int GuiService:GetBrickCount() [RobloxScriptSecurity]
	Function Instance GuiService:GetClosestDialogToPosition(Vector3 position) [RobloxScriptSecurity]
	Function ConnectionError GuiService:GetErrorCode() [RobloxScriptSecurity]
	Function string GuiService:GetErrorMessage() [deprecated] [RobloxScriptSecurity]
	Function ConnectionError GuiService:GetErrorType() [RobloxScriptSecurity]
	Function Tuple GuiService:GetGuiInset()
	Function Dictionary GuiService:GetNotificationTypeList() [RobloxScriptSecurity]
	Function int GuiService:GetResolutionScale() [LocalUserSecurity]
	Function Dictionary GuiService:GetSafeZoneOffsets() [RobloxScriptSecurity]
	Function string GuiService:GetUiMessage() [RobloxScriptSecurity]
	Function bool GuiService:IsMemoryTrackerEnabled() [RobloxScriptSecurity]
	Function bool GuiService:IsTenFootInterface()
	Function void GuiService:OpenBrowserWindow(string url) [RobloxScriptSecurity]
	Function void GuiService:OpenNativeOverlay(string title, string url) [RobloxScriptSecurity]
	Function void GuiService:RemoveCenterDialog(Instance dialog) [RobloxScriptSecurity]
	Function void GuiService:RemoveKey(string key) [RobloxScriptSecurity]
	Function void GuiService:RemoveSelectionGroup(string selectionName)
	Function void GuiService:RemoveSpecialKey(SpecialKey key) [RobloxScriptSecurity]
	Function void GuiService:SetGlobalGuiInset(int x1, int y1, int x2, int y2) [RobloxScriptSecurity]
	Function void GuiService:SetMenuIsOpen(bool open) [RobloxScriptSecurity]
	Function void GuiService:SetSafeZoneOffsets(float top, float bottom, float left, float right) [RobloxScriptSecurity]
	Function void GuiService:SetUiMessage(UiMessageType msgType, string uiMessage = errorCode) [LocalUserSecurity]
	Function bool GuiService:ShowStatsBasedOnInputString(string input) [RobloxScriptSecurity]
	Function void GuiService:ToggleFullscreen() [RobloxScriptSecurity]
	YieldFunction Vector2 GuiService:GetScreenResolution() [RobloxScriptSecurity]
	Event GuiService.BrowserWindowClosed() [RobloxScriptSecurity]
	Event GuiService.ErrorMessageChanged(string newErrorMessage) [deprecated] [RobloxScriptSecurity]
	Event GuiService.KeyPressed(string key, string modifiers) [RobloxScriptSecurity]
	Event GuiService.MenuClosed()
	Event GuiService.MenuOpened()
	Event GuiService.SafeZoneOffsetsChanged() [RobloxScriptSecurity]
	Event GuiService.ShowLeaveConfirmation() [RobloxScriptSecurity]
	Event GuiService.SpecialKeyPressed(SpecialKey key, string modifiers) [RobloxScriptSecurity]
	Event GuiService.UiMessageChanged(UiMessageType msgType, string newUiMessage) [RobloxScriptSecurity]
	Callback void GuiService.SendCoreUiNotification(string title, string text) [RobloxScriptSecurity]
Class GuidRegistryService : Instance
Class HapticService : Instance [notCreatable]
	Function Tuple HapticService:GetMotor(UserInputType inputType, VibrationMotor vibrationMotor)
	Function bool HapticService:IsMotorSupported(UserInputType inputType, VibrationMotor vibrationMotor)
	Function bool HapticService:IsVibrationSupported(UserInputType inputType)
	Function void HapticService:SetMotor(UserInputType inputType, VibrationMotor vibrationMotor, Tuple vibrationValues)
Class HttpRbxApiService : Instance [notCreatable]
	YieldFunction string HttpRbxApiService:GetAsync(string apiUrlPath, ThrottlingPriority priority = Default, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction string HttpRbxApiService:GetAsyncFullUrl(string apiUrl, ThrottlingPriority priority = Default, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction string HttpRbxApiService:PostAsync(string apiUrlPath, string data, ThrottlingPriority priority = Default, HttpContentType content_type = ApplicationJson, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction string HttpRbxApiService:PostAsyncFullUrl(string apiUrl, string data, ThrottlingPriority priority = Default, HttpContentType content_type = ApplicationJson, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction string HttpRbxApiService:RequestAsync(Dictionary requestOptions, ThrottlingPriority priority = Default, HttpContentType content_type = ApplicationJson, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
Class HttpRequest : Instance
	Function void HttpRequest:Cancel() [RobloxScriptSecurity]
	Function void HttpRequest:Start(Function callback) [RobloxScriptSecurity]
Class HttpService : Instance [notCreatable]
	Property bool HttpService.HttpEnabled [LocalUserSecurity]
	Function string HttpService:GenerateGUID(bool wrapInCurlyBraces = true)
	Function bool HttpService:GetHttpEnabled() [RobloxScriptSecurity]
	Function Variant HttpService:JSONDecode(string input)
	Function string HttpService:JSONEncode(Variant input)
	Function Instance HttpService:RequestInternal(Dictionary options) [RobloxScriptSecurity]
	Function void HttpService:SetHttpEnabled(bool enabled) [RobloxScriptSecurity]
	Function string HttpService:UrlEncode(string input)
	YieldFunction string HttpService:GetAsync(string url, bool nocache = false, Variant headers)
	YieldFunction string HttpService:PostAsync(string url, string data, HttpContentType content_type = ApplicationJson, bool compress = false, Variant headers)
	YieldFunction Dictionary HttpService:RequestAsync(Dictionary requestOptions)
Class Humanoid : Instance
	Property bool Humanoid.AutoJumpEnabled
	Property bool Humanoid.AutoRotate
	Property bool Humanoid.AutomaticScalingEnabled
	Property Vector3 Humanoid.CameraOffset
	Property HumanoidDisplayDistanceType Humanoid.DisplayDistanceType
	Property Material Humanoid.FloorMaterial [readonly]
	Property float Humanoid.Health
	Property float Humanoid.HealthDisplayDistance
	Property HumanoidHealthDisplayType Humanoid.HealthDisplayType
	Property float Humanoid.HipHeight
	Property bool Humanoid.Jump
	Property float Humanoid.JumpPower
	Property Class:BasePart Humanoid.LeftLeg [deprecated] [hidden]
	Property float Humanoid.MaxHealth
	Property float Humanoid.MaxSlopeAngle
	Property Vector3 Humanoid.MoveDirection [readonly]
	Property float Humanoid.NameDisplayDistance
	Property NameOcclusion Humanoid.NameOcclusion
	Property bool Humanoid.PlatformStand
	Property HumanoidRigType Humanoid.RigType
	Property Class:BasePart Humanoid.RightLeg [deprecated] [hidden]
	Property Class:BasePart Humanoid.RootPart [readonly]
	Property Class:BasePart Humanoid.SeatPart [readonly]
	Property bool Humanoid.Sit
	Property Vector3 Humanoid.TargetPoint
	Property Class:BasePart Humanoid.Torso [deprecated] [hidden]
	Property float Humanoid.WalkSpeed
	Property Class:BasePart Humanoid.WalkToPart
	Property Vector3 Humanoid.WalkToPoint
	Property float Humanoid.maxHealth [deprecated]
	Function void Humanoid:AddAccessory(Instance accessory)
	Function bool Humanoid:AddCustomStatus(string status) [deprecated]
	Function bool Humanoid:AddStatus(Status status = Poison) [deprecated]
	Function void Humanoid:BuildRigFromAttachments()
	Function void Humanoid:ChangeState(HumanoidStateType state = None)
	Function void Humanoid:EquipTool(Instance tool)
	Function Array Humanoid:GetAccessories()
	Function BodyPartR15 Humanoid:GetBodyPartR15(Instance part)
	Function Limb Humanoid:GetLimb(Instance part)
	Function Array Humanoid:GetPlayingAnimationTracks()
	Function HumanoidStateType Humanoid:GetState()
	Function bool Humanoid:GetStateEnabled(HumanoidStateType state)
	Function Array Humanoid:GetStatuses() [deprecated]
	Function bool Humanoid:HasCustomStatus(string status) [deprecated]
	Function bool Humanoid:HasStatus(Status status = Poison) [deprecated]
	Function Instance Humanoid:LoadAnimation(Instance animation)
	Function void Humanoid:Move(Vector3 moveDirection, bool relativeToCamera = false)
	Function void Humanoid:MoveTo(Vector3 location, Instance part = nil)
	Function void Humanoid:RemoveAccessories()
	Function bool Humanoid:RemoveCustomStatus(string status) [deprecated]
	Function bool Humanoid:RemoveStatus(Status status = Poison) [deprecated]
	Function bool Humanoid:ReplaceBodyPartR15(BodyPartR15 bodyPart, Instance part)
	Function void Humanoid:SetClickToWalkEnabled(bool enabled) [RobloxScriptSecurity]
	Function void Humanoid:SetStateEnabled(HumanoidStateType state, bool enabled)
	Function void Humanoid:TakeDamage(float amount)
	Function void Humanoid:UnequipTools()
	Function Instance Humanoid:loadAnimation(Instance animation) [deprecated]
	Function void Humanoid:takeDamage(float amount) [deprecated]
	Event Humanoid.AnimationPlayed(Instance animationTrack)
	Event Humanoid.Climbing(float speed)
	Event Humanoid.CustomStatusAdded(string status) [deprecated]
	Event Humanoid.CustomStatusRemoved(string status) [deprecated]
	Event Humanoid.Died()
	Event Humanoid.FallingDown(bool active)
	Event Humanoid.FreeFalling(bool active)
	Event Humanoid.GettingUp(bool active)
	Event Humanoid.HealthChanged(float health)
	Event Humanoid.Jumping(bool active)
	Event Humanoid.MoveToFinished(bool reached)
	Event Humanoid.PlatformStanding(bool active)
	Event Humanoid.Ragdoll(bool active)
	Event Humanoid.Running(float speed)
	Event Humanoid.Seated(bool active, Instance currentSeatPart)
	Event Humanoid.StateChanged(HumanoidStateType old, HumanoidStateType new)
	Event Humanoid.StateEnabledChanged(HumanoidStateType state, bool isEnabled)
	Event Humanoid.StatusAdded(Status status) [deprecated]
	Event Humanoid.StatusRemoved(Status status) [deprecated]
	Event Humanoid.Strafing(bool active)
	Event Humanoid.Swimming(float speed)
	Event Humanoid.Touched(Instance touchingPart, Instance humanoidPart)
Class InputObject : Instance [notCreatable]
	Property Vector3 InputObject.Delta
	Property KeyCode InputObject.KeyCode
	Property Vector3 InputObject.Position
	Property UserInputState InputObject.UserInputState
	Property UserInputType InputObject.UserInputType
Class InsertService : Instance [notCreatable]
	Property bool InsertService.AllowInsertFreeModels [notbrowsable] [deprecated]
	Function void InsertService:ApproveAssetId(int64 assetId) [deprecated]
	Function void InsertService:ApproveAssetVersionId(int64 assetVersionId) [deprecated]
	Function void InsertService:Insert(Instance instance) [deprecated]
	Function Instance InsertService:LoadLocalAsset(string assetPath) [RobloxScriptSecurity]
	YieldFunction Array InsertService:GetBaseCategories() [deprecated]
	YieldFunction Array InsertService:GetBaseSets()
	YieldFunction Array InsertService:GetCollection(int64 categoryId)
	YieldFunction Array InsertService:GetFreeDecals(string searchText, int pageNum)
	YieldFunction Array InsertService:GetFreeModels(string searchText, int pageNum)
	YieldFunction int64 InsertService:GetLatestAssetVersionAsync(int64 assetId)
	YieldFunction Array InsertService:GetUserCategories(int64 userId) [deprecated]
	YieldFunction Array InsertService:GetUserSets(int64 userId)
	YieldFunction Instance InsertService:LoadAsset(int64 assetId)
	YieldFunction Instance InsertService:LoadAssetVersion(int64 assetVersionId)
	YieldFunction Instance InsertService:loadAsset(int64 assetId) [deprecated]
Class InstancePacketCache : Instance [notCreatable]
Class JointInstance : Instance
	Property CoordinateFrame JointInstance.C0
	Property CoordinateFrame JointInstance.C1
	Property Class:BasePart JointInstance.Part0
	Property Class:BasePart JointInstance.Part1
	Property Class:BasePart JointInstance.part1 [deprecated] [hidden]
Class DynamicRotate : JointInstance
	Property float DynamicRotate.BaseAngle
Class RotateP : DynamicRotate
Class RotateV : DynamicRotate
Class Glue : JointInstance
	Property Vector3 Glue.F0
	Property Vector3 Glue.F1
	Property Vector3 Glue.F2
	Property Vector3 Glue.F3
Class ManualSurfaceJointInstance : JointInstance
Class ManualGlue : ManualSurfaceJointInstance
Class ManualWeld : ManualSurfaceJointInstance
Class Motor : JointInstance
	Property float Motor.CurrentAngle
	Property float Motor.DesiredAngle
	Property float Motor.MaxVelocity
	Function void Motor:SetDesiredAngle(float value)
Class Motor6D : Motor
	Property CoordinateFrame Motor6D.Transform [hidden]
Class Rotate : JointInstance
Class Snap : JointInstance
Class VelocityMotor : JointInstance
	Property float VelocityMotor.CurrentAngle
	Property float VelocityMotor.DesiredAngle
	Property Class:Hole VelocityMotor.Hole
	Property float VelocityMotor.MaxVelocity
Class Weld : JointInstance
Class JointsService : Instance [notCreatable]
	Function void JointsService:ClearJoinAfterMoveJoints()
	Function void JointsService:CreateJoinAfterMoveJoints()
	Function void JointsService:SetJoinAfterMoveInstance(Instance joinInstance)
	Function void JointsService:SetJoinAfterMoveTarget(Instance joinTarget)
	Function void JointsService:ShowPermissibleJoints()
Class KeyboardService : Instance
Class Keyframe : Instance
	Property float Keyframe.Time
	Function void Keyframe:AddPose(Instance pose)
	Function Objects Keyframe:GetPoses()
	Function void Keyframe:RemovePose(Instance pose)
Class KeyframeSequence : Instance
	Property bool KeyframeSequence.Loop
	Property AnimationPriority KeyframeSequence.Priority
	Function void KeyframeSequence:AddKeyframe(Instance keyframe)
	Function Objects KeyframeSequence:GetKeyframes()
	Function void KeyframeSequence:RemoveKeyframe(Instance keyframe)
Class KeyframeSequenceProvider : Instance
	Function Instance KeyframeSequenceProvider:GetKeyframeSequence(Content assetId) [deprecated] [PluginSecurity]
	Function Instance KeyframeSequenceProvider:GetKeyframeSequenceById(int64 assetId, bool useCache) [deprecated] [PluginSecurity]
	Function Content KeyframeSequenceProvider:RegisterActiveKeyframeSequence(Instance keyframeSequence)
	Function Content KeyframeSequenceProvider:RegisterKeyframeSequence(Instance keyframeSequence)
	YieldFunction Instance KeyframeSequenceProvider:GetAnimations(int64 userId)
	YieldFunction Instance KeyframeSequenceProvider:GetKeyframeSequenceAsync(Content assetId)
Class Light : Instance
	Property float Light.Brightness
	Property Color3 Light.Color
	Property bool Light.Enabled
	Property bool Light.Shadows
Class PointLight : Light
	Property float PointLight.Range
Class SpotLight : Light
	Property float SpotLight.Angle
	Property NormalId SpotLight.Face
	Property float SpotLight.Range
Class SurfaceLight : Light
	Property float SurfaceLight.Angle
	Property NormalId SurfaceLight.Face
	Property float SurfaceLight.Range
Class Lighting : Instance [notCreatable]
	Property Color3 Lighting.Ambient
	Property float Lighting.Brightness
	Property float Lighting.ClockTime
	Property Color3 Lighting.ColorShift_Bottom
	Property Color3 Lighting.ColorShift_Top
	Property float Lighting.ExposureCompensation
	Property Color3 Lighting.FogColor
	Property float Lighting.FogEnd
	Property float Lighting.FogStart
	Property float Lighting.GeographicLatitude
	Property bool Lighting.GlobalShadows
	Property Color3 Lighting.OutdoorAmbient
	Property bool Lighting.Outlines
	Property Color3 Lighting.ShadowColor [deprecated]
	Property string Lighting.TimeOfDay
	Function double Lighting:GetMinutesAfterMidnight()
	Function Vector3 Lighting:GetMoonDirection()
	Function float Lighting:GetMoonPhase()
	Function Vector3 Lighting:GetSunDirection()
	Function void Lighting:SetMinutesAfterMidnight(double minutes)
	Function double Lighting:getMinutesAfterMidnight() [deprecated]
	Function void Lighting:setMinutesAfterMidnight(double minutes) [deprecated]
	Event Lighting.LightingChanged(bool skyboxChanged)
Class LocalizationService : Instance [notCreatable]
	Property string LocalizationService.ForcePlayModeGameLocaleId [LocalUserSecurity]
	Property string LocalizationService.ForcePlayModeRobloxLocaleId [LocalUserSecurity]
	Property bool LocalizationService.IsTextScraperRunning [hidden] [RobloxScriptSecurity]
	Property string LocalizationService.RobloxForcePlayModeGameLocaleId [RobloxScriptSecurity]
	Property string LocalizationService.RobloxForcePlayModeRobloxLocaleId [RobloxScriptSecurity]
	Property string LocalizationService.RobloxLocaleId [readonly]
	Property string LocalizationService.SystemLocaleId [readonly]
	Function Objects LocalizationService:GetCorescriptLocalizations()
	Function Instance LocalizationService:GetTranslatorForPlayer(Instance player)
	Function void LocalizationService:StartTextScraper() [RobloxScriptSecurity]
	Function void LocalizationService:StopTextScraper() [RobloxScriptSecurity]
	YieldFunction void LocalizationService:PromptExportToCSVs() [RobloxScriptSecurity]
	YieldFunction void LocalizationService:PromptImportFromCSVs() [RobloxScriptSecurity]
	Event LocalizationService.AutoTranslateWillRun() [RobloxScriptSecurity]
Class LocalizationTable : Instance
	Property string LocalizationTable.DevelopmentLanguage [deprecated] [hidden]
	Property Class:Instance LocalizationTable.Root [deprecated] [hidden]
	Property string LocalizationTable.SourceLocaleId
	Function string LocalizationTable:GetContents() [deprecated]
	Function Array LocalizationTable:GetEntries()
	Function string LocalizationTable:GetString(string targetLocaleId, string key) [deprecated]
	Function Instance LocalizationTable:GetTranslator(string localeId)
	Function void LocalizationTable:RemoveEntry(string key, string source, string context)
	Function void LocalizationTable:RemoveEntryValue(string key, string source, string context, string localeId)
	Function void LocalizationTable:RemoveKey(string key) [deprecated]
	Function void LocalizationTable:RemoveTargetLocale(string localeId)
	Function void LocalizationTable:SetContents(string contents) [deprecated]
	Function void LocalizationTable:SetEntries(Variant entries)
	Function void LocalizationTable:SetEntry(string key, string targetLocaleId, string text) [deprecated]
	Function void LocalizationTable:SetEntryContext(string key, string source, string context, string newContext)
	Function void LocalizationTable:SetEntryExample(string key, string source, string context, string example)
	Function void LocalizationTable:SetEntryKey(string key, string source, string context, string newKey)
	Function void LocalizationTable:SetEntrySource(string key, string source, string context, string newSource)
	Function void LocalizationTable:SetEntryValue(string key, string source, string context, string localeId, string text)
	Function void LocalizationTable:SetIsExemptFromUGCAnalytics(bool value) [RobloxScriptSecurity]
Class LogService : Instance [notCreatable]
	Function void LogService:ExecuteScript(string source) [RobloxScriptSecurity]
	Function Array LogService:GetHttpResultHistory() [RobloxScriptSecurity]
	Function Array LogService:GetLogHistory()
	Function void LogService:RequestHttpResultApproved() [RobloxScriptSecurity]
	Function void LogService:RequestServerHttpResult() [RobloxScriptSecurity]
	Function void LogService:RequestServerOutput() [RobloxScriptSecurity]
	Event LogService.HttpResultOut(Dictionary httpResult) [RobloxScriptSecurity]
	Event LogService.MessageOut(string message, MessageType messageType)
	Event LogService.OnHttpResultApproved(bool isApproved) [RobloxScriptSecurity]
	Event LogService.ServerHttpResultOut(Dictionary httpResult) [RobloxScriptSecurity]
	Event LogService.ServerMessageOut(string message, MessageType messageType, int timestamp) [RobloxScriptSecurity]
Class LoginService : Instance
	Function void LoginService:Logout() [RobloxSecurity]
	Function void LoginService:PromptLogin() [RobloxSecurity]
	Event LoginService.LoginFailed(string loginError) [RobloxSecurity]
	Event LoginService.LoginSucceeded(string username) [RobloxSecurity]
Class LuaSettings : Instance
	Property bool LuaSettings.AreScriptStartsReported
	Property double LuaSettings.DefaultWaitTime
	Property int LuaSettings.GcFrequency
	Property int LuaSettings.GcLimit
	Property int LuaSettings.GcPause
	Property int LuaSettings.GcStepMul
	Property float LuaSettings.WaitingThreadsBudget
Class LuaSourceContainer : Instance [notbrowsable]
Class BaseScript : LuaSourceContainer
	Property bool BaseScript.Disabled
	Property Content BaseScript.LinkedSource
Class CoreScript : BaseScript [notCreatable]
Class Script : BaseScript
	Property ProtectedString Script.Source [PluginSecurity]
	Function string Script:GetHash() [LocalUserSecurity]
Class LocalScript : Script
Class ModuleScript : LuaSourceContainer
	Property Content ModuleScript.LinkedSource
	Property ProtectedString ModuleScript.Source [PluginSecurity]
Class LuaWebService : Instance
Class MarketplaceService : Instance [notCreatable]
	Function bool MarketplaceService:PlayerCanMakePurchases(Instance player) [RobloxScriptSecurity]
	Function void MarketplaceService:PromptGamePassPurchase(Instance player, int64 gamePassId)
	Function void MarketplaceService:PromptNativePurchase(Instance player, string productId) [RobloxScriptSecurity]
	Function void MarketplaceService:PromptProductPurchase(Instance player, int64 productId, bool equipIfPurchased = true, CurrencyType currencyType = Default)
	Function void MarketplaceService:PromptPurchase(Instance player, int64 assetId, bool equipIfPurchased = true, CurrencyType currencyType = Default)
	Function void MarketplaceService:PromptThirdPartyPurchase(Instance player, string productId) [LocalUserSecurity]
	Function void MarketplaceService:ReportAssetSale(string assetId, int robuxAmount) [RobloxScriptSecurity]
	Function void MarketplaceService:ReportRobuxUpsellStarted() [RobloxScriptSecurity]
	Function void MarketplaceService:SignalClientPurchaseSuccess(string ticket, int64 playerId, int64 productId) [RobloxScriptSecurity]
	Function void MarketplaceService:SignalPromptGamePassPurchaseFinished(Instance player, int64 gamePassId, bool success) [RobloxScriptSecurity]
	Function void MarketplaceService:SignalPromptProductPurchaseFinished(int64 userId, int64 productId, bool success) [RobloxScriptSecurity]
	Function void MarketplaceService:SignalPromptPurchaseFinished(Instance player, int64 assetId, bool success) [RobloxScriptSecurity]
	Function void MarketplaceService:SignalServerLuaDialogClosed(bool value) [RobloxScriptSecurity]
	YieldFunction Instance MarketplaceService:GetDeveloperProductsAsync()
	YieldFunction Dictionary MarketplaceService:GetProductInfo(int64 assetId, InfoType infoType = Asset)
	YieldFunction int MarketplaceService:GetRobuxBalance() [RobloxScriptSecurity]
	YieldFunction Dictionary MarketplaceService:PerformPurchase(InfoType infoType, int64 productId, int expectedPrice, string requestId) [RobloxScriptSecurity]
	YieldFunction bool MarketplaceService:PlayerOwnsAsset(Instance player, int64 assetId)
	YieldFunction bool MarketplaceService:UserOwnsGamePassAsync(int64 userId, int64 gamePassId)
	Event MarketplaceService.ClientLuaDialogRequested(Tuple arguments) [RobloxScriptSecurity]
	Event MarketplaceService.ClientPurchaseSuccess(string ticket, int64 playerId, int64 productId) [RobloxScriptSecurity]
	Event MarketplaceService.NativePurchaseFinished(Instance player, string productId, bool wasPurchased) [RobloxScriptSecurity]
	Event MarketplaceService.PromptGamePassPurchaseFinished(Instance player, int64 gamePassId, bool wasPurchased)
	Event MarketplaceService.PromptGamePassPurchaseRequested(Instance player, int64 gamePassId) [RobloxScriptSecurity]
	Event MarketplaceService.PromptProductPurchaseFinished(int64 userId, int64 productId, bool isPurchased) [deprecated]
	Event MarketplaceService.PromptProductPurchaseRequested(Instance player, int64 productId, bool equipIfPurchased, CurrencyType currencyType) [RobloxScriptSecurity]
	Event MarketplaceService.PromptPurchaseFinished(Instance player, int64 assetId, bool isPurchased)
	Event MarketplaceService.PromptPurchaseRequested(Instance player, int64 assetId, bool equipIfPurchased, CurrencyType currencyType) [RobloxScriptSecurity]
	Event MarketplaceService.ServerPurchaseVerification(Dictionary serverResponseTable) [RobloxScriptSecurity]
	Event MarketplaceService.ThirdPartyPurchaseFinished(Instance player, string productId, string receipt, bool wasPurchased) [LocalUserSecurity]
	Callback ProductPurchaseDecision MarketplaceService.ProcessReceipt(Dictionary receiptInfo)
Class Message : Instance [deprecated]
	Property string Message.Text
Class Hint : Message [deprecated]
Class Mouse : Instance
	Property CoordinateFrame Mouse.Hit [readonly]
	Property Content Mouse.Icon
	Property CoordinateFrame Mouse.Origin [readonly]
	Property Class:BasePart Mouse.Target [readonly]
	Property Class:Instance Mouse.TargetFilter
	Property NormalId Mouse.TargetSurface [readonly]
	Property Ray Mouse.UnitRay [readonly]
	Property int Mouse.ViewSizeX [readonly]
	Property int Mouse.ViewSizeY [readonly]
	Property int Mouse.X [readonly]
	Property int Mouse.Y [readonly]
	Property CoordinateFrame Mouse.hit [deprecated] [hidden] [readonly]
	Property Class:BasePart Mouse.target [deprecated] [readonly]
	Event Mouse.Button1Down()
	Event Mouse.Button1Up()
	Event Mouse.Button2Down()
	Event Mouse.Button2Up()
	Event Mouse.Idle()
	Event Mouse.KeyDown(string key) [deprecated]
	Event Mouse.KeyUp(string key) [deprecated]
	Event Mouse.Move()
	Event Mouse.WheelBackward()
	Event Mouse.WheelForward()
	Event Mouse.keyDown(string key) [deprecated]
Class PlayerMouse : Mouse
Class PluginMouse : Mouse
	Event PluginMouse.DragEnter(Objects instances) [PluginSecurity]
Class MouseService : Instance [notCreatable]
Class NetworkMarker : Instance [notbrowsable]
	Event NetworkMarker.Received()
Class NetworkPeer : Instance [notbrowsable]
	Function void NetworkPeer:SetOutgoingKBPSLimit(int limit) [PluginSecurity]
Class NetworkClient : NetworkPeer [notCreatable]
	Property string NetworkClient.Ticket
	Event NetworkClient.ConnectionAccepted(string peer, Instance replicator)
	Event NetworkClient.ConnectionFailed(string peer, int code, string reason)
	Event NetworkClient.ConnectionRejected(string peer)
Class NetworkServer : NetworkPeer [notCreatable]
	Property int NetworkServer.Port [readonly]
	Function int NetworkServer:GetClientCount() [LocalUserSecurity]
Class NetworkReplicator : Instance [notCreatable]
	Function void NetworkReplicator:CloseConnection() [LocalUserSecurity]
	Function Instance NetworkReplicator:GetPlayer()
	Function string NetworkReplicator:GetRakStatsString(int verbosityLevel = 0) [PluginSecurity]
Class ClientReplicator : NetworkReplicator [notCreatable]
	Function void ClientReplicator:RequestServerStats(bool request) [RobloxScriptSecurity]
	Event ClientReplicator.StatsReceived(Dictionary stats) [RobloxScriptSecurity]
Class ServerReplicator : NetworkReplicator [notCreatable]
Class NetworkSettings : Instance [notbrowsable]
	Property bool NetworkSettings.ArePhysicsRejectionsReported
	Property float NetworkSettings.ClientPhysicsSendRate
	Property float NetworkSettings.DataGCRate
	Property int NetworkSettings.DataMtuAdjust
	Property PacketPriority NetworkSettings.DataSendPriority [hidden]
	Property float NetworkSettings.DataSendRate
	Property int NetworkSettings.ExtraMemoryUsed [hidden] [PluginSecurity]
	Property float NetworkSettings.FreeMemoryMBytes [hidden] [readonly] [PluginSecurity]
	Property double NetworkSettings.IncommingReplicationLag
	Property bool NetworkSettings.IsQueueErrorComputed
	Property float NetworkSettings.NetworkOwnerRate
	Property int NetworkSettings.PhysicsMtuAdjust
	Property PacketPriority NetworkSettings.PhysicsSendPriority [hidden]
	Property float NetworkSettings.PhysicsSendRate
	Property int NetworkSettings.PreferredClientPort
	Property bool NetworkSettings.PrintBits
	Property bool NetworkSettings.PrintEvents
	Property bool NetworkSettings.PrintFilters
	Property bool NetworkSettings.PrintInstances
	Property bool NetworkSettings.PrintPhysicsErrors
	Property bool NetworkSettings.PrintProperties
	Property bool NetworkSettings.PrintSplitMessage
	Property bool NetworkSettings.PrintStreamInstanceQuota
	Property bool NetworkSettings.PrintTouches
	Property double NetworkSettings.ReceiveRate
	Property bool NetworkSettings.RenderStreamedRegions
	Property bool NetworkSettings.ShowActiveAnimationAsset
	Property float NetworkSettings.TouchSendRate
	Property bool NetworkSettings.TrackDataTypes
	Property bool NetworkSettings.TrackPhysicsDetails
	Property bool NetworkSettings.UseInstancePacketCache
	Property bool NetworkSettings.UsePhysicsPacketCache
Class NotificationService : Instance [notCreatable]
	Property bool NotificationService.IsLuaChatEnabled [readonly] [RobloxScriptSecurity]
	Property bool NotificationService.IsLuaGamesPageEnabled [readonly] [RobloxScriptSecurity]
	Property bool NotificationService.IsLuaHomePageEnabled [readonly] [RobloxScriptSecurity]
	Function void NotificationService:ActionEnabled(AppShellActionType actionType) [RobloxScriptSecurity]
	Function void NotificationService:ActionTaken(AppShellActionType actionType) [RobloxScriptSecurity]
	Function void NotificationService:CancelAllNotification(int64 userId) [LocalUserSecurity]
	Function void NotificationService:CancelNotification(int64 userId, int alertId) [LocalUserSecurity]
	Function void NotificationService:ScheduleNotification(int64 userId, int alertId, string alertMsg, int minutesToFire) [LocalUserSecurity]
	YieldFunction Array NotificationService:GetScheduledNotifications(int64 userId) [LocalUserSecurity]
	Event NotificationService.RobloxConnectionChanged(string connectionName, ConnectionState connectionState, string sequenceNumber) [RobloxScriptSecurity]
	Event NotificationService.RobloxEventReceived(Map eventData) [RobloxScriptSecurity]
Class PVInstance : Instance [notbrowsable]
Class BasePart : PVInstance [notbrowsable]
	Property bool BasePart.Anchored
	Property float BasePart.BackParamA
	Property float BasePart.BackParamB
	Property SurfaceType BasePart.BackSurface
	Property InputType BasePart.BackSurfaceInput
	Property float BasePart.BottomParamA
	Property float BasePart.BottomParamB
	Property SurfaceType BasePart.BottomSurface
	Property InputType BasePart.BottomSurfaceInput
	Property BrickColor BasePart.BrickColor
	Property CoordinateFrame BasePart.CFrame
	Property bool BasePart.CanCollide
	Property Vector3 BasePart.CenterOfMass [readonly]
	Property int BasePart.CollisionGroupId
	Property Color3 BasePart.Color
	Property PhysicalProperties BasePart.CustomPhysicalProperties
	Property float BasePart.Elasticity [deprecated] [hidden]
	Property float BasePart.Friction [deprecated] [hidden]
	Property float BasePart.FrontParamA
	Property float BasePart.FrontParamB
	Property SurfaceType BasePart.FrontSurface
	Property InputType BasePart.FrontSurfaceInput
	Property float BasePart.LeftParamA
	Property float BasePart.LeftParamB
	Property SurfaceType BasePart.LeftSurface
	Property InputType BasePart.LeftSurfaceInput
	Property float BasePart.LocalTransparencyModifier [hidden]
	Property bool BasePart.Locked
	Property Material BasePart.Material
	Property Vector3 BasePart.Orientation
	Property Vector3 BasePart.Position
	Property float BasePart.ReceiveAge [hidden] [readonly]
	Property float BasePart.Reflectance
	Property int BasePart.ResizeIncrement [readonly]
	Property Faces BasePart.ResizeableFaces [readonly]
	Property float BasePart.RightParamA
	Property float BasePart.RightParamB
	Property SurfaceType BasePart.RightSurface
	Property InputType BasePart.RightSurfaceInput
	Property Vector3 BasePart.RotVelocity
	Property Vector3 BasePart.Rotation
	Property Vector3 BasePart.Size
	Property float BasePart.SpecificGravity [deprecated] [readonly]
	Property float BasePart.TopParamA
	Property float BasePart.TopParamB
	Property SurfaceType BasePart.TopSurface
	Property InputType BasePart.TopSurfaceInput
	Property float BasePart.Transparency
	Property Vector3 BasePart.Velocity
	Property BrickColor BasePart.brickColor [deprecated]
	Function void BasePart:BreakJoints()
	Function bool BasePart:CanCollideWith(Instance part)
	Function Tuple BasePart:CanSetNetworkOwnership()
	Function Objects BasePart:GetConnectedParts(bool recursive = false)
	Function Objects BasePart:GetJoints()
	Function float BasePart:GetMass()
	Function Instance BasePart:GetNetworkOwner()
	Function bool BasePart:GetNetworkOwnershipAuto()
	Function CoordinateFrame BasePart:GetRenderCFrame() [deprecated]
	Function Instance BasePart:GetRootPart()
	Function Objects BasePart:GetTouchingParts()
	Function bool BasePart:IsGrounded()
	Function void BasePart:MakeJoints()
	Function bool BasePart:Resize(NormalId normalId, int deltaAmount)
	Function void BasePart:SetNetworkOwner(Instance playerInstance = nil)
	Function void BasePart:SetNetworkOwnershipAuto()
	Function void BasePart:breakJoints() [deprecated]
	Function float BasePart:getMass() [deprecated]
	Function void BasePart:makeJoints() [deprecated]
	Function bool BasePart:resize(NormalId normalId, int deltaAmount) [deprecated]
	YieldFunction Instance BasePart:SubtractAsync(Objects parts, CollisionFidelity collisionfidelity = Default)
	YieldFunction Instance BasePart:UnionAsync(Objects parts, CollisionFidelity collisionfidelity = Default)
	Event BasePart.LocalSimulationTouched(Instance part) [deprecated]
	Event BasePart.OutfitChanged() [deprecated]
	Event BasePart.StoppedTouching(Instance otherPart) [deprecated]
	Event BasePart.TouchEnded(Instance otherPart)
	Event BasePart.Touched(Instance otherPart)
	Event BasePart.touched(Instance otherPart) [deprecated]
Class CornerWedgePart : BasePart
Class FormFactorPart : BasePart
	Property FormFactor FormFactorPart.FormFactor [deprecated]
	Property FormFactor FormFactorPart.formFactor [deprecated] [hidden]
Class Part : FormFactorPart
	Property PartType Part.Shape
Class FlagStand : Part [deprecated]
	Property BrickColor FlagStand.TeamColor
	Event FlagStand.FlagCaptured(Instance player)
Class Platform : Part
Class Seat : Part
	Property bool Seat.Disabled
	Property Class:Humanoid Seat.Occupant [readonly]
	Function void Seat:Sit(Instance humanoid)
Class SkateboardPlatform : Part [deprecated]
	Property Class:SkateboardController SkateboardPlatform.Controller [readonly]
	Property Class:Humanoid SkateboardPlatform.ControllingHumanoid [readonly]
	Property int SkateboardPlatform.Steer
	Property bool SkateboardPlatform.StickyWheels
	Property int SkateboardPlatform.Throttle
	Function void SkateboardPlatform:ApplySpecificImpulse(Vector3 impulseWorld)
	Event SkateboardPlatform.Equipped(Instance humanoid, Instance skateboardController)
	Event SkateboardPlatform.MoveStateChanged(MoveState newState, MoveState oldState)
	Event SkateboardPlatform.Unequipped(Instance humanoid)
	Event SkateboardPlatform.equipped(Instance humanoid, Instance skateboardController) [deprecated]
	Event SkateboardPlatform.unequipped(Instance humanoid) [deprecated]
Class SpawnLocation : Part
	Property bool SpawnLocation.AllowTeamChangeOnTouch
	Property int SpawnLocation.Duration
	Property bool SpawnLocation.Enabled
	Property bool SpawnLocation.Neutral
	Property BrickColor SpawnLocation.TeamColor
Class WedgePart : FormFactorPart
Class MeshPart : BasePart
	Property Content MeshPart.MeshId [ScriptWriteRestricted: [NotAccessibleSecurity]]
	Property Content MeshPart.TextureID
Class PartOperation : BasePart
	Property int PartOperation.TriangleCount [readonly]
	Property bool PartOperation.UsePartColor
Class NegateOperation : PartOperation
Class UnionOperation : PartOperation
Class Terrain : BasePart [notCreatable]
	Property bool Terrain.IsSmooth [deprecated] [readonly]
	Property Region3int16 Terrain.MaxExtents [readonly]
	Property Color3 Terrain.WaterColor
	Property float Terrain.WaterReflectance
	Property float Terrain.WaterTransparency
	Property float Terrain.WaterWaveSize
	Property float Terrain.WaterWaveSpeed
	Function bool Terrain:AutowedgeCell(int x, int y, int z) [deprecated]
	Function void Terrain:AutowedgeCells(Region3int16 region) [deprecated]
	Function Vector3 Terrain:CellCenterToWorld(int x, int y, int z)
	Function Vector3 Terrain:CellCornerToWorld(int x, int y, int z)
	Function void Terrain:Clear()
	Function void Terrain:ConvertToSmooth() [deprecated] [PluginSecurity]
	Function Instance Terrain:CopyRegion(Region3int16 region)
	Function int Terrain:CountCells()
	Function void Terrain:FillBall(Vector3 center, float radius, Material material)
	Function void Terrain:FillBlock(CoordinateFrame cframe, Vector3 size, Material material)
	Function void Terrain:FillRegion(Region3 region, float resolution, Material material)
	Function Tuple Terrain:GetCell(int x, int y, int z) [deprecated]
	Function Color3 Terrain:GetMaterialColor(Material material)
	Function Tuple Terrain:GetWaterCell(int x, int y, int z) [deprecated]
	Function void Terrain:PasteRegion(Instance region, Vector3int16 corner, bool pasteEmptyCells)
	Function Tuple Terrain:ReadVoxels(Region3 region, float resolution)
	Function void Terrain:SetCell(int x, int y, int z, CellMaterial material, CellBlock block, CellOrientation orientation) [deprecated]
	Function void Terrain:SetCells(Region3int16 region, CellMaterial material, CellBlock block, CellOrientation orientation) [deprecated]
	Function void Terrain:SetMaterialColor(Material material, Color3 value)
	Function void Terrain:SetWaterCell(int x, int y, int z, WaterForce force, WaterDirection direction) [deprecated]
	Function Vector3 Terrain:WorldToCell(Vector3 position)
	Function Vector3 Terrain:WorldToCellPreferEmpty(Vector3 position)
	Function Vector3 Terrain:WorldToCellPreferSolid(Vector3 position)
	Function void Terrain:WriteVoxels(Region3 region, float resolution, Array materials, Array occupancy)
Class TrussPart : BasePart
	Property Style TrussPart.Style
Class VehicleSeat : BasePart
	Property int VehicleSeat.AreHingesDetected [readonly]
	Property bool VehicleSeat.Disabled
	Property bool VehicleSeat.HeadsUpDisplay
	Property float VehicleSeat.MaxSpeed
	Property Class:Humanoid VehicleSeat.Occupant [readonly]
	Property int VehicleSeat.Steer
	Property float VehicleSeat.SteerFloat
	Property int VehicleSeat.Throttle
	Property float VehicleSeat.ThrottleFloat
	Property float VehicleSeat.Torque
	Property float VehicleSeat.TurnSpeed
	Function void VehicleSeat:Sit(Instance humanoid)
Class Model : PVInstance
	Property Class:BasePart Model.PrimaryPart
	Function void Model:BreakJoints()
	Function Vector3 Model:GetExtentsSize()
	Function CoordinateFrame Model:GetModelCFrame() [deprecated]
	Function Vector3 Model:GetModelSize() [deprecated]
	Function CoordinateFrame Model:GetPrimaryPartCFrame()
	Function void Model:MakeJoints()
	Function void Model:MoveTo(Vector3 position)
	Function void Model:ResetOrientationToIdentity() [deprecated]
	Function void Model:SetIdentityOrientation() [deprecated]
	Function void Model:SetPrimaryPartCFrame(CoordinateFrame cframe)
	Function void Model:TranslateBy(Vector3 delta)
	Function void Model:breakJoints() [deprecated]
	Function void Model:makeJoints() [deprecated]
	Function void Model:move(Vector3 location) [deprecated]
	Function void Model:moveTo(Vector3 location) [deprecated]
Class Status : Model [deprecated] [notCreatable]
Class Workspace : Model
	Property bool Workspace.AllowThirdPartySales
	Property Class:Camera Workspace.CurrentCamera
	Property double Workspace.DistributedGameTime
	Property float Workspace.FallenPartsDestroyHeight [ScriptWriteRestricted: [PluginSecurity]]
	Property bool Workspace.FilteringEnabled [ScriptWriteRestricted: [PluginSecurity]]
	Property float Workspace.Gravity
	Property bool Workspace.StreamingEnabled
	Property bool Workspace.TemporaryLegacyPhysicsSolverOverride
	Property Class:Instance Workspace.Terrain [readonly]
	Function void Workspace:BreakJoints(Objects objects) [PluginSecurity]
	Function bool Workspace:ExperimentalSolverIsEnabled() [LocalUserSecurity]
	Function Tuple Workspace:FindPartOnRay(Ray ray, Instance ignoreDescendantsInstance = nil, bool terrainCellsAreCubes = false, bool ignoreWater = false)
	Function Tuple Workspace:FindPartOnRayWithIgnoreList(Ray ray, Objects ignoreDescendantsTable, bool terrainCellsAreCubes = false, bool ignoreWater = false)
	Function Tuple Workspace:FindPartOnRayWithWhitelist(Ray ray, Objects whitelistDescendantsTable, bool ignoreWater = false)
	Function Objects Workspace:FindPartsInRegion3(Region3 region, Instance ignoreDescendantsInstance = nil, int maxParts = 20)
	Function Objects Workspace:FindPartsInRegion3WithIgnoreList(Region3 region, Objects ignoreDescendantsTable, int maxParts = 20)
	Function Objects Workspace:FindPartsInRegion3WithWhiteList(Region3 region, Objects whitelistDescendantsTable, int maxParts = 20)
	Function int Workspace:GetNumAwakeParts()
	Function bool Workspace:GetPhysicsAnalyzerBreakOnIssue() [PluginSecurity]
	Function Objects Workspace:GetPhysicsAnalyzerIssue(int index) [PluginSecurity]
	Function int Workspace:GetPhysicsThrottling()
	Function double Workspace:GetRealPhysicsFPS()
	Function bool Workspace:IsRegion3Empty(Region3 region, Instance ignoreDescendentsInstance = nil)
	Function bool Workspace:IsRegion3EmptyWithIgnoreList(Region3 region, Objects ignoreDescendentsTable)
	Function void Workspace:JoinToOutsiders(Objects objects, JointCreationMode jointType)
	Function void Workspace:MakeJoints(Objects objects) [PluginSecurity]
	Function bool Workspace:PGSIsEnabled()
	Function void Workspace:SetPhysicsAnalyzerBreakOnIssue(bool enable) [PluginSecurity]
	Function void Workspace:SetPhysicsThrottleEnabled(bool value) [LocalUserSecurity]
	Function void Workspace:UnjoinFromOutsiders(Objects objects)
	Function void Workspace:ZoomToExtents() [PluginSecurity]
	Function Tuple Workspace:findPartOnRay(Ray ray, Instance ignoreDescendantsInstance = nil, bool terrainCellsAreCubes = false, bool ignoreWater = false) [deprecated]
	Function Objects Workspace:findPartsInRegion3(Region3 region, Instance ignoreDescendantsInstance = nil, int maxParts = 20) [deprecated]
	Event Workspace.PhysicsAnalyzerIssuesFound(int count) [PluginSecurity]
Class PackageLink : Instance [notCreatable]
	Property Content PackageLink.PackageId [readonly]
	Property int64 PackageLink.VersionNumber [readonly]
Class Pages : Instance
	Property bool Pages.IsFinished [readonly]
	Function Array Pages:GetCurrentPage()
	YieldFunction void Pages:AdvanceToNextPageAsync()
Class DataStorePages : Pages
Class FriendPages : Pages
Class InventoryPages : Pages
Class StandardPages : Pages
Class PartOperationAsset : Instance
Class ParticleEmitter : Instance
	Property Vector3 ParticleEmitter.Acceleration
	Property ColorSequence ParticleEmitter.Color
	Property float ParticleEmitter.Drag
	Property NormalId ParticleEmitter.EmissionDirection
	Property bool ParticleEmitter.Enabled
	Property NumberRange ParticleEmitter.Lifetime
	Property float ParticleEmitter.LightEmission
	Property float ParticleEmitter.LightInfluence
	Property bool ParticleEmitter.LockedToPart
	Property float ParticleEmitter.Rate
	Property NumberRange ParticleEmitter.RotSpeed
	Property NumberRange ParticleEmitter.Rotation
	Property NumberSequence ParticleEmitter.Size
	Property NumberRange ParticleEmitter.Speed
	Property Vector2 ParticleEmitter.SpreadAngle
	Property Content ParticleEmitter.Texture
	Property NumberSequence ParticleEmitter.Transparency
	Property float ParticleEmitter.VelocityInheritance
	Property float ParticleEmitter.VelocitySpread [deprecated]
	Property float ParticleEmitter.ZOffset
	Function void ParticleEmitter:Clear()
	Function void ParticleEmitter:Emit(int particleCount = 16)
Class Path : Instance
	Property PathStatus Path.Status [readonly]
	Function Array Path:GetPointCoordinates() [deprecated]
	Function Array Path:GetWaypoints()
	YieldFunction int Path:CheckOcclusionAsync(int start)
Class PathfindingService : Instance [notCreatable]
	Property float PathfindingService.EmptyCutoff [deprecated]
	YieldFunction Instance PathfindingService:ComputeRawPathAsync(Vector3 start, Vector3 finish, float maxDistance) [deprecated]
	YieldFunction Instance PathfindingService:ComputeSmoothPathAsync(Vector3 start, Vector3 finish, float maxDistance) [deprecated]
	YieldFunction Instance PathfindingService:FindPathAsync(Vector3 start, Vector3 finish)
Class PhysicsPacketCache : Instance [notCreatable]
Class PhysicsService : Instance
	Function bool PhysicsService:CollisionGroupContainsPart(string name, Instance part)
	Function void PhysicsService:CollisionGroupSetCollidable(string name1, string name2, bool collidable)
	Function bool PhysicsService:CollisionGroupsAreCollidable(string name1, string name2)
	Function int PhysicsService:CreateCollisionGroup(string name)
	Function int PhysicsService:GetCollisionGroupId(string name)
	Function string PhysicsService:GetCollisionGroupName(int name)
	Function Array PhysicsService:GetCollisionGroups()
	Function int PhysicsService:GetMaxCollisionGroups()
	Function void PhysicsService:IkSolve(Instance part, CoordinateFrame target, float translateStiffness, float rotateStiffness) [RobloxScriptSecurity]
	Function void PhysicsService:LocalIkSolve(Instance part, CoordinateFrame target, float translateStiffness, float rotateStiffness) [LocalUserSecurity]
	Function void PhysicsService:RemoveCollisionGroup(string name)
	Function void PhysicsService:RenameCollisionGroup(string from, string to)
	Function void PhysicsService:SetPartCollisionGroup(Instance part, string name)
Class PhysicsSettings : Instance
	Property bool PhysicsSettings.AllowSleep
	Property bool PhysicsSettings.AreAnchorsShown
	Property bool PhysicsSettings.AreAssembliesShown
	Property bool PhysicsSettings.AreAwakePartsHighlighted
	Property bool PhysicsSettings.AreBodyTypesShown
	Property bool PhysicsSettings.AreContactIslandsShown
	Property bool PhysicsSettings.AreContactPointsShown
	Property bool PhysicsSettings.AreJointCoordinatesShown
	Property bool PhysicsSettings.AreMechanismsShown
	Property bool PhysicsSettings.AreModelCoordsShown
	Property bool PhysicsSettings.AreOwnersShown
	Property bool PhysicsSettings.ArePartCoordsShown
	Property bool PhysicsSettings.AreRegionsShown
	Property bool PhysicsSettings.AreUnalignedPartsShown
	Property bool PhysicsSettings.AreWorldCoordsShown
	Property bool PhysicsSettings.DisableCSGv2
	Property bool PhysicsSettings.IsReceiveAgeShown
	Property bool PhysicsSettings.IsTreeShown
	Property bool PhysicsSettings.PhysicsAnalyzerEnabled [readonly] [PluginSecurity]
	Property EnviromentalPhysicsThrottle PhysicsSettings.PhysicsEnvironmentalThrottle
	Property bool PhysicsSettings.ShowDecompositionGeometry
	Property double PhysicsSettings.ThrottleAdjustTime
	Property bool PhysicsSettings.UseCSGv2
Class Player : Instance
	Property int Player.AccountAge [readonly]
	Property bool Player.AppearanceDidLoad [deprecated] [readonly] [RobloxScriptSecurity]
	Property bool Player.AutoJumpEnabled
	Property float Player.CameraMaxZoomDistance
	Property float Player.CameraMinZoomDistance
	Property CameraMode Player.CameraMode
	Property bool Player.CanLoadCharacterAppearance
	Property Class:Model Player.Character
	Property string Player.CharacterAppearance [notbrowsable] [deprecated]
	Property int64 Player.CharacterAppearanceId
	Property ChatMode Player.ChatMode [readonly] [RobloxScriptSecurity]
	Property int Player.DataComplexity [deprecated] [readonly]
	Property int Player.DataComplexityLimit [deprecated] [LocalUserSecurity]
	Property bool Player.DataReady [deprecated] [readonly]
	Property DevCameraOcclusionMode Player.DevCameraOcclusionMode
	Property DevComputerCameraMovementMode Player.DevComputerCameraMode
	Property DevComputerMovementMode Player.DevComputerMovementMode
	Property bool Player.DevEnableMouseLock
	Property DevTouchCameraMovementMode Player.DevTouchCameraMode
	Property DevTouchMovementMode Player.DevTouchMovementMode
	Property string Player.DisplayName [RobloxScriptSecurity]
	Property int64 Player.FollowUserId [readonly]
	Property bool Player.Guest [readonly] [RobloxScriptSecurity]
	Property float Player.HealthDisplayDistance
	Property string Player.LocaleId [hidden] [readonly]
	Property float Player.MaximumSimulationRadius [LocalUserSecurity]
	Property MembershipType Player.MembershipType [readonly]
	Property float Player.NameDisplayDistance
	Property bool Player.Neutral
	Property string Player.OsPlatform [RobloxScriptSecurity]
	Property Class:Instance Player.ReplicationFocus
	Property Class:SpawnLocation Player.RespawnLocation
	Property float Player.SimulationRadius [LocalUserSecurity]
	Property Class:Team Player.Team
	Property BrickColor Player.TeamColor
	Property bool Player.Teleported [hidden] [readonly] [RobloxScriptSecurity]
	Property bool Player.TeleportedIn [RobloxScriptSecurity]
	Property int64 Player.UserId
	Property string Player.VRDevice [RobloxScriptSecurity]
	Property int64 Player.userId [deprecated]
	Function void Player:AddToBlockList(Array userIds) [RobloxScriptSecurity]
	Function void Player:ClearCharacterAppearance()
	Function float Player:DistanceFromCharacter(Vector3 point)
	Function FriendStatus Player:GetFriendStatus(Instance player) [RobloxScriptSecurity]
	Function string Player:GetGameSessionID() [RobloxSecurity]
	Function Dictionary Player:GetJoinData()
	Function Instance Player:GetMouse()
	Function bool Player:GetUnder13() [RobloxScriptSecurity]
	Function bool Player:HasAppearanceLoaded()
	Function bool Player:IsUserAvailableForExperiment() [deprecated]
	Function void Player:Kick(string message = )
	Function bool Player:LoadBoolean(string key) [deprecated]
	Function void Player:LoadCharacterAppearance(Instance assetInstance)
	Function void Player:LoadData() [deprecated] [LocalUserSecurity]
	Function Instance Player:LoadInstance(string key) [deprecated]
	Function double Player:LoadNumber(string key) [deprecated]
	Function string Player:LoadString(string key) [deprecated]
	Function void Player:Move(Vector3 walkDirection, bool relativeToCamera = false)
	Function void Player:RemoveCharacter() [LocalUserSecurity]
	Function void Player:RequestFriendship(Instance player) [RobloxScriptSecurity]
	Function void Player:RevokeFriendship(Instance player) [RobloxScriptSecurity]
	Function void Player:SaveBoolean(string key, bool value) [deprecated]
	Function void Player:SaveData() [deprecated] [LocalUserSecurity]
	Function void Player:SaveInstance(string key, Instance value) [deprecated]
	Function void Player:SaveNumber(string key, double value) [deprecated]
	Function void Player:SaveString(string key, string value) [deprecated]
	Function void Player:SetAccountAge(int accountAge) [PluginSecurity]
	Function void Player:SetMembershipType(MembershipType membershipType) [RobloxScriptSecurity]
	Function void Player:SetSuperSafeChat(bool value) [PluginSecurity]
	Function void Player:SetUnder13(bool value) [deprecated] [RobloxSecurity]
	Function void Player:UpdatePlayerBlocked(int64 userId, bool blocked) [RobloxScriptSecurity]
	Function bool Player:loadBoolean(string key) [deprecated]
	Function Instance Player:loadInstance(string key) [deprecated]
	Function double Player:loadNumber(string key) [deprecated]
	Function string Player:loadString(string key) [deprecated]
	Function void Player:saveBoolean(string key, bool value) [deprecated]
	Function void Player:saveInstance(string key, Instance value) [deprecated]
	Function void Player:saveNumber(string key, double value) [deprecated]
	Function void Player:saveString(string key, string value) [deprecated]
	YieldFunction Array Player:GetFriendsOnline(int maxFriends = 200)
	YieldFunction int Player:GetRankInGroup(int64 groupId)
	YieldFunction string Player:GetRoleInGroup(int64 groupId)
	YieldFunction bool Player:IsBestFriendsWith(int64 userId) [deprecated]
	YieldFunction bool Player:IsFriendsWith(int64 userId)
	YieldFunction bool Player:IsInGroup(int64 groupId)
	YieldFunction void Player:LoadCharacter()
	YieldFunction void Player:LoadCharacterBlocking() [LocalUserSecurity]
	YieldFunction bool Player:WaitForDataReady() [deprecated]
	YieldFunction bool Player:isFriendsWith(int64 userId) [deprecated]
	YieldFunction bool Player:waitForDataReady() [deprecated]
	Event Player.CharacterAdded(Instance character)
	Event Player.CharacterAppearanceLoaded(Instance character)
	Event Player.CharacterRemoving(Instance character)
	Event Player.Chatted(string message, Instance recipient)
	Event Player.FriendStatusChanged(Instance player, FriendStatus friendStatus) [RobloxScriptSecurity]
	Event Player.Idled(double time)
	Event Player.OnTeleport(TeleportState teleportState, int64 placeId, string spawnName)
	Event Player.SimulationRadiusChanged(float radius) [LocalUserSecurity]
Class PlayerScripts : Instance [notCreatable]
	Function void PlayerScripts:ClearComputerCameraMovementModes()
	Function void PlayerScripts:ClearComputerMovementModes()
	Function void PlayerScripts:ClearTouchCameraMovementModes()
	Function void PlayerScripts:ClearTouchMovementModes()
	Function Array PlayerScripts:GetRegisteredComputerCameraMovementModes() [RobloxScriptSecurity]
	Function Array PlayerScripts:GetRegisteredComputerMovementModes() [RobloxScriptSecurity]
	Function Array PlayerScripts:GetRegisteredTouchCameraMovementModes() [RobloxScriptSecurity]
	Function Array PlayerScripts:GetRegisteredTouchMovementModes() [RobloxScriptSecurity]
	Function void PlayerScripts:RegisterComputerCameraMovementMode(ComputerCameraMovementMode cameraMovementMode)
	Function void PlayerScripts:RegisterComputerMovementMode(ComputerMovementMode movementMode)
	Function void PlayerScripts:RegisterTouchCameraMovementMode(TouchCameraMovementMode cameraMovementMode)
	Function void PlayerScripts:RegisterTouchMovementMode(TouchMovementMode movementMode)
	Event PlayerScripts.ComputerCameraMovementModeRegistered() [RobloxScriptSecurity]
	Event PlayerScripts.ComputerMovementModeRegistered() [RobloxScriptSecurity]
	Event PlayerScripts.TouchCameraMovementModeRegistered() [RobloxScriptSecurity]
	Event PlayerScripts.TouchMovementModeRegistered() [RobloxScriptSecurity]
Class Players : Instance
	Property bool Players.BubbleChat [readonly]
	Property bool Players.CharacterAutoLoads
	Property bool Players.ClassicChat [readonly]
	Property Class:Instance Players.LocalPlayer [readonly]
	Property int Players.MaxPlayers [readonly]
	Property int Players.MaxPlayersInternal [LocalUserSecurity]
	Property int Players.NumPlayers [deprecated] [readonly]
	Property int Players.PreferredPlayers [readonly]
	Property int Players.PreferredPlayersInternal [LocalUserSecurity]
	Property Class:Instance Players.localPlayer [deprecated] [hidden] [readonly]
	Property int Players.numPlayers [deprecated] [hidden] [readonly]
	Function void Players:Chat(string message) [PluginSecurity]
	Function Instance Players:CreateLocalPlayer() [LocalUserSecurity]
	Function Instance Players:GetPlayerByUserId(int64 userId)
	Function Instance Players:GetPlayerFromCharacter(Instance character)
	Function Objects Players:GetPlayers()
	Function void Players:ReportAbuse(Instance player, string reason, string optionalMessage) [LocalUserSecurity]
	Function void Players:SetChatStyle(ChatStyle style = Classic) [PluginSecurity]
	Function void Players:TeamChat(string message) [PluginSecurity]
	Function void Players:WhisperChat(string message, Instance player) [LocalUserSecurity]
	Function Instance Players:getPlayerFromCharacter(Instance character) [deprecated]
	Function Objects Players:getPlayers() [deprecated]
	Function Instance Players:playerFromCharacter(Instance character) [deprecated]
	Function Objects Players:players() [deprecated]
	YieldFunction Instance Players:GetCharacterAppearanceAsync(int64 userId)
	YieldFunction Dictionary Players:GetCharacterAppearanceInfoAsync(int64 userId)
	YieldFunction Instance Players:GetFriendsAsync(int64 userId)
	YieldFunction string Players:GetNameFromUserIdAsync(int64 userId)
	YieldFunction int64 Players:GetUserIdFromNameAsync(string userName)
	YieldFunction Tuple Players:GetUserThumbnailAsync(int64 userId, ThumbnailType thumbnailType, ThumbnailSize thumbnailSize)
	Event Players.FriendRequestEvent(Instance player, Instance player, FriendRequestEvent friendRequestEvent) [RobloxScriptSecurity]
	Event Players.GameAnnounce(string message) [RobloxScriptSecurity]
	Event Players.PlayerAdded(Instance player)
	Event Players.PlayerChatted(PlayerChatType chatType, Instance player, string message, Instance targetPlayer) [LocalUserSecurity]
	Event Players.PlayerConnecting(Instance player) [LocalUserSecurity]
	Event Players.PlayerDisconnecting(Instance player) [LocalUserSecurity]
	Event Players.PlayerRejoining(Instance player) [LocalUserSecurity]
	Event Players.PlayerRemoving(Instance player)
Class Plugin : Instance
	Property bool Plugin.CollisionEnabled [readonly]
	Property float Plugin.GridSize [readonly]
	Property bool Plugin.UsesAssetInsertionDrag [RobloxScriptSecurity]
	Function void Plugin:Activate(bool exclusiveMouse) [PluginSecurity]
	Function Instance Plugin:CreatePluginAction(string actionId, string text, string statusTip, string iconName = ) [PluginSecurity]
	Function Instance Plugin:CreateToolbar(string name) [PluginSecurity]
	Function void Plugin:Deactivate() [PluginSecurity]
	Function JointCreationMode Plugin:GetJoinMode() [PluginSecurity]
	Function Instance Plugin:GetMouse() [PluginSecurity]
	Function RibbonTool Plugin:GetSelectedRibbonTool() [PluginSecurity]
	Function Variant Plugin:GetSetting(string key) [PluginSecurity]
	Function int64 Plugin:GetStudioUserId() [PluginSecurity]
	Function void Plugin:ImportFbxAnimation(Instance rigModel) [PluginSecurity]
	Function bool Plugin:IsActivated() [PluginSecurity]
	Function bool Plugin:IsActivatedWithExclusiveMouse() [PluginSecurity]
	Function Objects Plugin:Negate(Objects objects) [PluginSecurity]
	Function void Plugin:OpenScript(Instance script, int lineNumber = 1) [PluginSecurity]
	Function void Plugin:OpenWikiPage(string url) [PluginSecurity]
	Function void Plugin:PauseSound(Instance soundChannel) [RobloxScriptSecurity]
	Function void Plugin:PlaySound(Instance soundChannel) [RobloxScriptSecurity]
	Function void Plugin:ResumeSound(Instance soundChannel) [RobloxScriptSecurity]
	Function void Plugin:SaveSelectedToRoblox() [PluginSecurity]
	Function void Plugin:SelectRibbonTool(RibbonTool tool, UDim2 position) [PluginSecurity]
	Function Objects Plugin:Separate(Objects objects) [PluginSecurity]
	Function void Plugin:SetSetting(string key, Variant value) [PluginSecurity]
	Function void Plugin:StartDecalDrag(Instance decal) [RobloxScriptSecurity]
	Function void Plugin:StartDrag(PluginDrag drag) [RobloxScriptSecurity]
	Function void Plugin:StopAllSounds() [RobloxScriptSecurity]
	Function Instance Plugin:Union(Objects objects) [PluginSecurity]
	YieldFunction Instance Plugin:CreateDockWidgetPluginGui(string pluginGuiId, DockWidgetPluginGuiInfo dockWidgetPluginGuiInfo) [PluginSecurity]
	YieldFunction Instance Plugin:CreateQWidgetPluginGui(string pluginGuiId, Dictionary pluginGuiOptions) [RobloxScriptSecurity]
	YieldFunction Instance Plugin:ImportFbxRig() [PluginSecurity]
	YieldFunction int64 Plugin:PromptForExistingAssetId(string assetType) [PluginSecurity]
	YieldFunction bool Plugin:PromptSaveSelection(string suggestedFileName = ) [PluginSecurity]
	Event Plugin.Deactivation() [PluginSecurity]
Class PluginAction : Instance
	Property string PluginAction.ActionId [readonly]
	Property string PluginAction.StatusTip [readonly]
	Property string PluginAction.Text [readonly]
	Event PluginAction.Triggered() [PluginSecurity]
Class PluginGuiService : Instance [notCreatable]
Class PluginManager : Instance
	Function Instance PluginManager:CreatePlugin() [PluginSecurity]
	Function void PluginManager:ExportPlace(string filePath = ) [PluginSecurity]
	Function void PluginManager:ExportSelection(string filePath = ) [PluginSecurity]
Class PointsService : Instance [notCreatable]
	Function int PointsService:GetAwardablePoints() [deprecated]
	YieldFunction Tuple PointsService:AwardPoints(int64 userId, int amount)
	YieldFunction int PointsService:GetGamePointBalance(int64 userId)
	YieldFunction int PointsService:GetPointBalance(int64 userId) [deprecated]
	Event PointsService.PointsAwarded(int64 userId, int pointsAwarded, int userBalanceInGame, int userTotalBalance)
Class Pose : Instance
	Property CoordinateFrame Pose.CFrame
	Property PoseEasingDirection Pose.EasingDirection
	Property PoseEasingStyle Pose.EasingStyle
	Property float Pose.MaskWeight [deprecated]
	Property float Pose.Weight
	Function void Pose:AddSubPose(Instance pose)
	Function Objects Pose:GetSubPoses()
	Function void Pose:RemoveSubPose(Instance pose)
Class PostEffect : Instance
	Property bool PostEffect.Enabled
Class BloomEffect : PostEffect
	Property float BloomEffect.Intensity
	Property float BloomEffect.Size
	Property float BloomEffect.Threshold
Class BlurEffect : PostEffect
	Property float BlurEffect.Size
Class ColorCorrectionEffect : PostEffect
	Property float ColorCorrectionEffect.Brightness
	Property float ColorCorrectionEffect.Contrast
	Property float ColorCorrectionEffect.Saturation
	Property Color3 ColorCorrectionEffect.TintColor
Class SunRaysEffect : PostEffect
	Property float SunRaysEffect.Intensity
	Property float SunRaysEffect.Spread
Class ReflectionMetadata : Instance
Class ReflectionMetadataCallbacks : Instance
Class ReflectionMetadataClasses : Instance
Class ReflectionMetadataEnums : Instance
Class ReflectionMetadataEvents : Instance
Class ReflectionMetadataFunctions : Instance
Class ReflectionMetadataItem : Instance
	Property bool ReflectionMetadataItem.Browsable
	Property string ReflectionMetadataItem.ClassCategory
	Property string ReflectionMetadataItem.Constraint
	Property bool ReflectionMetadataItem.Deprecated
	Property bool ReflectionMetadataItem.EditingDisabled
	Property bool ReflectionMetadataItem.IsBackend
	Property string ReflectionMetadataItem.ScriptContext
	Property double ReflectionMetadataItem.UIMaximum
	Property double ReflectionMetadataItem.UIMinimum
	Property double ReflectionMetadataItem.UINumTicks
	Property string ReflectionMetadataItem.summary
Class ReflectionMetadataClass : ReflectionMetadataItem
	Property int ReflectionMetadataClass.ExplorerImageIndex
	Property int ReflectionMetadataClass.ExplorerOrder
	Property bool ReflectionMetadataClass.Insertable
	Property string ReflectionMetadataClass.PreferredParent
	Property string ReflectionMetadataClass.PreferredParents
Class ReflectionMetadataEnum : ReflectionMetadataItem
Class ReflectionMetadataEnumItem : ReflectionMetadataItem
Class ReflectionMetadataMember : ReflectionMetadataItem
Class ReflectionMetadataProperties : Instance
Class ReflectionMetadataYieldFunctions : Instance
Class RemoteEvent : Instance
	Function void RemoteEvent:FireAllClients(Tuple arguments)
	Function void RemoteEvent:FireClient(Instance player, Tuple arguments)
	Function void RemoteEvent:FireServer(Tuple arguments)
	Event RemoteEvent.OnClientEvent(Tuple arguments)
	Event RemoteEvent.OnServerEvent(Instance player, Tuple arguments)
Class RemoteFunction : Instance
	YieldFunction Tuple RemoteFunction:InvokeClient(Instance player, Tuple arguments)
	YieldFunction Tuple RemoteFunction:InvokeServer(Tuple arguments)
	Callback Tuple RemoteFunction.OnClientInvoke(Tuple arguments)
	Callback Tuple RemoteFunction.OnServerInvoke(Instance player, Tuple arguments)
Class RenderSettings : Instance [notbrowsable]
	Property int RenderSettings.AutoFRMLevel
	Property bool RenderSettings.EagerBulkExecution
	Property QualityLevel RenderSettings.EditQualityLevel
	Property bool RenderSettings.EnableFRM [hidden]
	Property bool RenderSettings.ExportMergeByMaterial
	Property FramerateManagerMode RenderSettings.FrameRateManager
	Property GraphicsMode RenderSettings.GraphicsMode
	Property int RenderSettings.MeshCacheSize
	Property QualityLevel RenderSettings.QualityLevel
	Property bool RenderSettings.ReloadAssets
	Property bool RenderSettings.RenderCSGTrianglesDebug
	Property bool RenderSettings.ShowBoundingBoxes
	Function int RenderSettings:GetMaxQualityLevel()
Class RenderingTest : Instance
	Property CoordinateFrame RenderingTest.CFrame
	Property int RenderingTest.ComparisonDiffThreshold
	Property RenderingTestComparisonMethod RenderingTest.ComparisonMethod
	Property float RenderingTest.ComparisonPsnrThreshold
	Property string RenderingTest.Description
	Property float RenderingTest.FieldOfView
	Property Vector3 RenderingTest.Orientation
	Property Vector3 RenderingTest.Position
	Property int RenderingTest.QualityLevel
	Property bool RenderingTest.ShouldSkip
	Property string RenderingTest.Ticket
Class ReplicatedFirst : Instance [notCreatable]
	Function bool ReplicatedFirst:IsDefaultLoadingGuiRemoved() [RobloxScriptSecurity]
	Function bool ReplicatedFirst:IsFinishedReplicating() [RobloxScriptSecurity]
	Function void ReplicatedFirst:RemoveDefaultLoadingScreen()
	Function void ReplicatedFirst:SetDefaultLoadingGuiRemoved() [RobloxScriptSecurity]
	Event ReplicatedFirst.DefaultLoadingGuiRemoved() [RobloxScriptSecurity]
	Event ReplicatedFirst.FinishedReplicating() [RobloxScriptSecurity]
	Event ReplicatedFirst.RemoveDefaultLoadingGuiSignal() [RobloxScriptSecurity]
Class ReplicatedStorage : Instance [notCreatable]
Class RobloxReplicatedStorage : Instance [notbrowsable] [notCreatable]
Class RunService : Instance
	Function void RunService:BindToRenderStep(string name, int priority, Function function)
	Function string RunService:GetRobloxVersion() [RobloxScriptSecurity]
	Function bool RunService:IsClient()
	Function bool RunService:IsEdit() [PluginSecurity]
	Function bool RunService:IsRunMode()
	Function bool RunService:IsRunning()
	Function bool RunService:IsServer()
	Function bool RunService:IsStudio()
	Function void RunService:Pause() [PluginSecurity]
	Function void RunService:Reset() [deprecated] [PluginSecurity]
	Function void RunService:Run() [PluginSecurity]
	Function void RunService:Set3dRenderingEnabled(bool enable) [RobloxScriptSecurity]
	Function void RunService:SetRobloxGuiFocused(bool focus) [RobloxScriptSecurity]
	Function void RunService:Stop() [PluginSecurity]
	Function void RunService:UnbindFromRenderStep(string name)
	Function void RunService:setThrottleFramerateEnabled(bool enable) [RobloxScriptSecurity]
	Event RunService.Heartbeat(double step)
	Event RunService.RenderStepped(double step)
	Event RunService.Stepped(double time, double step)
Class RuntimeScriptService : Instance [notCreatable]
Class ScriptContext : Instance [notCreatable]
	Property bool ScriptContext.ScriptsDisabled [LocalUserSecurity]
	Function void ScriptContext:AddCoreScriptLocal(string name, Instance parent) [RobloxScriptSecurity]
	Function void ScriptContext:SetTimeout(double seconds) [PluginSecurity]
	Event ScriptContext.Error(string message, string stackTrace, Instance script)
Class ScriptDebugger : Instance [notCreatable]
	Property int ScriptDebugger.CurrentLine [readonly]
	Property bool ScriptDebugger.IsDebugging [readonly]
	Property bool ScriptDebugger.IsPaused [readonly]
	Property Class:Instance ScriptDebugger.Script [readonly]
	Function Instance ScriptDebugger:AddWatch(string expression)
	Function Objects ScriptDebugger:GetBreakpoints()
	Function Map ScriptDebugger:GetGlobals()
	Function Map ScriptDebugger:GetLocals(int stackFrame = 0)
	Function Array ScriptDebugger:GetStack()
	Function Map ScriptDebugger:GetUpvalues(int stackFrame = 0)
	Function Variant ScriptDebugger:GetWatchValue(Instance watch)
	Function Objects ScriptDebugger:GetWatches()
	Function void ScriptDebugger:Resume() [deprecated]
	Function Instance ScriptDebugger:SetBreakpoint(int line)
	Function void ScriptDebugger:SetGlobal(string name, Variant value)
	Function void ScriptDebugger:SetLocal(string name, Variant value, int stackFrame = 0)
	Function void ScriptDebugger:SetUpvalue(string name, Variant value, int stackFrame = 0)
	Function void ScriptDebugger:StepIn() [deprecated]
	Function void ScriptDebugger:StepOut() [deprecated]
	Function void ScriptDebugger:StepOver() [deprecated]
	Event ScriptDebugger.BreakpointAdded(Instance breakpoint)
	Event ScriptDebugger.BreakpointRemoved(Instance breakpoint)
	Event ScriptDebugger.EncounteredBreak(int line)
	Event ScriptDebugger.Resuming()
	Event ScriptDebugger.WatchAdded(Instance watch)
	Event ScriptDebugger.WatchRemoved(Instance watch)
Class ScriptService : Instance
Class Selection : Instance
	Function Objects Selection:Get() [PluginSecurity]
	Function void Selection:Set(Objects selection) [PluginSecurity]
	Event Selection.SelectionChanged()
Class ServerScriptService : Instance [notCreatable]
Class ServerStorage : Instance [notCreatable]
Class ServiceProvider : Instance [notbrowsable]
	Function Instance ServiceProvider:FindService(string className)
	Function Instance ServiceProvider:GetService(string className)
	Function Instance ServiceProvider:getService(string className) [deprecated]
	Function Instance ServiceProvider:service(string className) [deprecated]
	Event ServiceProvider.Close()
	Event ServiceProvider.CloseLate() [LocalUserSecurity]
	Event ServiceProvider.ServiceAdded(Instance service)
	Event ServiceProvider.ServiceRemoving(Instance service)
Class DataModel : ServiceProvider
	Property int64 DataModel.CreatorId [readonly]
	Property CreatorType DataModel.CreatorType [readonly]
	Property int64 DataModel.GameId [readonly]
	Property GearGenreSetting DataModel.GearGenreSetting [readonly]
	Property Genre DataModel.Genre [readonly]
	Property bool DataModel.IsSFFlagsLoaded [readonly] [RobloxScriptSecurity]
	Property string DataModel.JobId [readonly]
	Property int64 DataModel.PlaceId [readonly]
	Property int DataModel.PlaceVersion [readonly]
	Property string DataModel.PrivateServerId [readonly]
	Property int64 DataModel.PrivateServerOwnerId [readonly]
	Property string DataModel.VIPServerId [deprecated] [hidden] [readonly]
	Property int64 DataModel.VIPServerOwnerId [deprecated] [hidden] [readonly]
	Property Class:Workspace DataModel.Workspace [readonly]
	Property Class:Instance DataModel.lighting [deprecated] [readonly]
	Property Class:Workspace DataModel.workspace [deprecated] [readonly]
	Function void DataModel:BindToClose(Function function)
	Function double DataModel:GetJobIntervalPeakFraction(string jobname, double greaterThan) [PluginSecurity]
	Function double DataModel:GetJobTimePeakFraction(string jobname, double greaterThan) [PluginSecurity]
	Function Array DataModel:GetJobsExtendedStats() [PluginSecurity]
	Function Array DataModel:GetJobsInfo() [PluginSecurity]
	Function string DataModel:GetMessage() [deprecated]
	Function bool DataModel:GetRemoteBuildMode() [deprecated]
	Function bool DataModel:IsGearTypeAllowed(GearType gearType)
	Function bool DataModel:IsLoaded()
	Function void DataModel:Load(Content url) [LocalUserSecurity]
	Function void DataModel:OpenScreenshotsFolder() [RobloxScriptSecurity]
	Function void DataModel:OpenVideosFolder() [RobloxScriptSecurity]
	Function void DataModel:ReportInGoogleAnalytics(string category, string action = custom, string label = none, int value = 0) [RobloxScriptSecurity]
	Function void DataModel:Shutdown() [LocalUserSecurity]
	YieldFunction string DataModel:HttpGetAsync(string url, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction string DataModel:HttpPostAsync(string url, string data, string contentType = */*, HttpRequestType httpRequestType = Default, bool doNotAllowDiabolicalMode = false) [RobloxScriptSecurity]
	YieldFunction bool DataModel:SavePlace(SaveFilter saveFilter = SaveAll) [deprecated]
	Event DataModel.AllowedGearTypeChanged() [deprecated]
	Event DataModel.GraphicsQualityChangeRequest(bool betterQuality)
	Event DataModel.ItemChanged(Instance object, Property descriptor) [deprecated]
	Event DataModel.Loaded()
	Event DataModel.ScreenshotReady(string path) [RobloxScriptSecurity]
	Callback Tuple DataModel.OnClose() [deprecated]
Class GenericSettings : ServiceProvider
Class AnalysticsSettings : GenericSettings
Class GlobalSettings : GenericSettings [notbrowsable]
	Function bool GlobalSettings:GetFFlag(string name)
	Function string GlobalSettings:GetFVariable(string name)
Class UserSettings : GenericSettings
	Function bool UserSettings:IsUserFeatureEnabled(string name)
	Function void UserSettings:Reset()
Class Sky : Instance
	Property bool Sky.CelestialBodiesShown
	Property float Sky.MoonAngularSize
	Property Content Sky.MoonTextureId
	Property Content Sky.SkyboxBk
	Property Content Sky.SkyboxDn
	Property Content Sky.SkyboxFt
	Property Content Sky.SkyboxLf
	Property Content Sky.SkyboxRt
	Property Content Sky.SkyboxUp
	Property int Sky.StarCount
	Property float Sky.SunAngularSize
	Property Content Sky.SunTextureId
Class Smoke : Instance
	Property Color3 Smoke.Color
	Property bool Smoke.Enabled
	Property float Smoke.Opacity
	Property float Smoke.RiseVelocity
	Property float Smoke.Size
Class Sound : Instance
	Property float Sound.EmitterSize
	Property bool Sound.IsLoaded [readonly]
	Property bool Sound.IsPaused [readonly]
	Property bool Sound.IsPlaying [readonly]
	Property bool Sound.Looped
	Property float Sound.MaxDistance
	Property float Sound.MinDistance [deprecated]
	Property float Sound.Pitch [deprecated]
	Property bool Sound.PlayOnRemove
	Property double Sound.PlaybackLoudness [readonly]
	Property float Sound.PlaybackSpeed
	Property bool Sound.Playing
	Property RollOffMode Sound.RollOffMode
	Property Class:SoundGroup Sound.SoundGroup
	Property Content Sound.SoundId
	Property double Sound.TimeLength [readonly]
	Property double Sound.TimePosition
	Property float Sound.Volume
	Property bool Sound.isPlaying [deprecated] [readonly]
	Function void Sound:Pause()
	Function void Sound:Play()
	Function void Sound:Resume()
	Function void Sound:Stop()
	Function void Sound:pause() [deprecated]
	Function void Sound:play() [deprecated]
	Function void Sound:stop() [deprecated]
	Event Sound.DidLoop(string soundId, int numOfTimesLooped)
	Event Sound.Ended(string soundId)
	Event Sound.Loaded(string soundId)
	Event Sound.Paused(string soundId)
	Event Sound.Played(string soundId)
	Event Sound.Resumed(string soundId)
	Event Sound.Stopped(string soundId)
Class SoundEffect : Instance
	Property bool SoundEffect.Enabled
	Property int SoundEffect.Priority
Class ChorusSoundEffect : SoundEffect
	Property float ChorusSoundEffect.Depth
	Property float ChorusSoundEffect.Mix
	Property float ChorusSoundEffect.Rate
Class CompressorSoundEffect : SoundEffect
	Property float CompressorSoundEffect.Attack
	Property float CompressorSoundEffect.GainMakeup
	Property float CompressorSoundEffect.Ratio
	Property float CompressorSoundEffect.Release
	Property Class:Instance CompressorSoundEffect.SideChain
	Property float CompressorSoundEffect.Threshold
Class DistortionSoundEffect : SoundEffect
	Property float DistortionSoundEffect.Level
Class EchoSoundEffect : SoundEffect
	Property float EchoSoundEffect.Delay
	Property float EchoSoundEffect.DryLevel
	Property float EchoSoundEffect.Feedback
	Property float EchoSoundEffect.WetLevel
Class EqualizerSoundEffect : SoundEffect
	Property float EqualizerSoundEffect.HighGain
	Property float EqualizerSoundEffect.LowGain
	Property float EqualizerSoundEffect.MidGain
Class FlangeSoundEffect : SoundEffect
	Property float FlangeSoundEffect.Depth
	Property float FlangeSoundEffect.Mix
	Property float FlangeSoundEffect.Rate
Class PitchShiftSoundEffect : SoundEffect
	Property float PitchShiftSoundEffect.Octave
Class ReverbSoundEffect : SoundEffect
	Property float ReverbSoundEffect.DecayTime
	Property float ReverbSoundEffect.Density
	Property float ReverbSoundEffect.Diffusion
	Property float ReverbSoundEffect.DryLevel
	Property float ReverbSoundEffect.WetLevel
Class TremoloSoundEffect : SoundEffect
	Property float TremoloSoundEffect.Depth
	Property float TremoloSoundEffect.Duty
	Property float TremoloSoundEffect.Frequency
Class SoundGroup : Instance
	Property float SoundGroup.Volume
Class SoundService : Instance [notCreatable]
	Property ReverbType SoundService.AmbientReverb
	Property float SoundService.DistanceFactor
	Property float SoundService.DopplerScale
	Property bool SoundService.RespectFilteringEnabled
	Property float SoundService.RolloffScale
	Function bool SoundService:BeginRecording() [RobloxScriptSecurity]
	Function Tuple SoundService:GetListener()
	Function void SoundService:PlayLocalSound(Instance sound)
	Function void SoundService:PlayStockSound(SoundType sound) [RobloxScriptSecurity]
	Function void SoundService:SetListener(ListenerType listenerType, Tuple listener)
	Function bool SoundService:SetRecordingDevice(int deviceIndex) [RobloxScriptSecurity]
	YieldFunction Dictionary SoundService:EndRecording() [RobloxScriptSecurity]
	YieldFunction Dictionary SoundService:GetRecordingDevices() [RobloxScriptSecurity]
Class Sparkles : Instance
	Property Color3 Sparkles.Color [hidden]
	Property bool Sparkles.Enabled
	Property Color3 Sparkles.SparkleColor
Class SpawnerService : Instance
Class StarterGear : Instance
Class StarterPlayer : Instance [notCreatable]
	Property bool StarterPlayer.AllowCustomAnimations [hidden] [ScriptWriteRestricted: [NotAccessibleSecurity]]
	Property bool StarterPlayer.AutoJumpEnabled
	Property float StarterPlayer.CameraMaxZoomDistance
	Property float StarterPlayer.CameraMinZoomDistance
	Property CameraMode StarterPlayer.CameraMode
	Property DevCameraOcclusionMode StarterPlayer.DevCameraOcclusionMode
	Property DevComputerCameraMovementMode StarterPlayer.DevComputerCameraMovementMode
	Property DevComputerMovementMode StarterPlayer.DevComputerMovementMode
	Property DevTouchCameraMovementMode StarterPlayer.DevTouchCameraMovementMode
	Property DevTouchMovementMode StarterPlayer.DevTouchMovementMode
	Property bool StarterPlayer.EnableMouseLockOption
	Property float StarterPlayer.HealthDisplayDistance
	Property bool StarterPlayer.LoadCharacterAppearance
	Property float StarterPlayer.NameDisplayDistance
Class StarterPlayerScripts : Instance
Class StarterCharacterScripts : StarterPlayerScripts
Class Stats : Instance
	Property int Stats.ContactsCount [readonly]
	Property float Stats.DataReceiveKbps [readonly]
	Property float Stats.DataSendKbps [readonly]
	Property float Stats.HeartbeatTimeMs [readonly]
	Property int Stats.InstanceCount [readonly]
	Property int Stats.MovingPrimitivesCount [readonly]
	Property float Stats.PhysicsReceiveKbps [readonly]
	Property float Stats.PhysicsSendKbps [readonly]
	Property float Stats.PhysicsStepTimeMs [readonly]
	Property int Stats.PrimitivesCount [readonly]
	Function float Stats:GetMemoryUsageMbForTag(DeveloperMemoryTag tag)
	Function float Stats:GetTotalMemoryUsageMb()
	YieldFunction Dictionary Stats:GetPaginatedMemoryByTexture(TextureQueryType queryType, int pageIndex, int pageSize) [RobloxScriptSecurity]
Class StatsItem : Instance
	Function double StatsItem:GetValue() [PluginSecurity]
	Function string StatsItem:GetValueString() [PluginSecurity]
Class RunningAverageItemDouble : StatsItem
Class RunningAverageItemInt : StatsItem
Class RunningAverageTimeIntervalItem : StatsItem
Class TotalCountTimeIntervalItem : StatsItem
Class TaskScheduler : Instance
	Property double TaskScheduler.SchedulerDutyCycle [readonly]
	Property double TaskScheduler.SchedulerRate [readonly]
	Property ThreadPoolConfig TaskScheduler.ThreadPoolConfig
	Property int TaskScheduler.ThreadPoolSize [readonly]
Class Team : Instance
	Property bool Team.AutoAssignable
	Property bool Team.AutoColorCharacters [deprecated]
	Property int Team.Score [deprecated]
	Property BrickColor Team.TeamColor
	Function Objects Team:GetPlayers()
	Event Team.PlayerAdded(Instance player)
	Event Team.PlayerRemoved(Instance player)
Class Teams : Instance [notCreatable]
	Function Objects Teams:GetTeams()
	Function void Teams:RebalanceTeams() [deprecated]
Class TeleportService : Instance
	Property bool TeleportService.CustomizedTeleportUI [deprecated]
	Function Instance TeleportService:GetArrivingTeleportGui()
	Function Variant TeleportService:GetLocalPlayerTeleportData()
	Function Variant TeleportService:GetTeleportSetting(string setting)
	Function void TeleportService:SetTeleportGui(Instance gui)
	Function void TeleportService:SetTeleportSetting(string setting, Variant value)
	Function void TeleportService:Teleport(int64 placeId, Instance player = nil, Variant teleportData, Instance customLoadingScreen = nil)
	Function void TeleportService:TeleportCancel() [RobloxScriptSecurity]
	Function void TeleportService:TeleportToPlaceInstance(int64 placeId, string instanceId, Instance player = nil, string spawnName = , Variant teleportData, Instance customLoadingScreen = nil)
	Function void TeleportService:TeleportToPrivateServer(int64 placeId, string reservedServerAccessCode, Objects players, string spawnName = , Variant teleportData, Instance customLoadingScreen = nil)
	Function void TeleportService:TeleportToSpawnByName(int64 placeId, string spawnName, Instance player = nil, Variant teleportData, Instance customLoadingScreen = nil)
	YieldFunction Tuple TeleportService:GetPlayerPlaceInstanceAsync(int64 userId)
	YieldFunction Tuple TeleportService:ReserveServer(int64 placeId)
	YieldFunction string TeleportService:TeleportPartyAsync(int64 placeId, Objects players, Variant teleportData, Instance customLoadingScreen = nil)
	Event TeleportService.LocalPlayerArrivedFromTeleport(Instance loadingGui, Variant dataTable)
	Event TeleportService.TeleportInitFailed(Instance player, TeleportResult teleportResult, string errorMessage)
Class TerrainRegion : Instance
	Property bool TerrainRegion.IsSmooth [deprecated] [readonly]
	Property Vector3 TerrainRegion.SizeInCells [readonly]
	Function void TerrainRegion:ConvertToSmooth() [deprecated] [PluginSecurity]
Class TestService : Instance
	Property bool TestService.AutoRuns
	Property string TestService.Description
	Property int TestService.ErrorCount [readonly]
	Property bool TestService.ExecuteWithStudioRun
	Property bool TestService.Is30FpsThrottleEnabled
	Property bool TestService.IsPhysicsEnvironmentalThrottled
	Property bool TestService.IsSleepAllowed
	Property int TestService.NumberOfPlayers
	Property double TestService.SimulateSecondsLag
	Property int TestService.TestCount [readonly]
	Property double TestService.Timeout
	Property int TestService.WarnCount [readonly]
	Function void TestService:Check(bool condition, string description, Instance source = nil, int line = 0)
	Function void TestService:Checkpoint(string text, Instance source = nil, int line = 0)
	Function void TestService:Done()
	Function void TestService:Error(string description, Instance source = nil, int line = 0)
	Function void TestService:Fail(string description, Instance source = nil, int line = 0)
	Function void TestService:Message(string text, Instance source = nil, int line = 0)
	Function void TestService:Require(bool condition, string description, Instance source = nil, int line = 0)
	Function void TestService:Warn(bool condition, string description, Instance source = nil, int line = 0)
	YieldFunction void TestService:Run() [PluginSecurity]
	Event TestService.ServerCollectConditionalResult(bool condition, string text, Instance script, int line)
	Event TestService.ServerCollectResult(string text, Instance script, int line)
Class TextFilterResult : Instance [notCreatable]
	YieldFunction string TextFilterResult:GetChatForUserAsync(int64 toUserId)
	YieldFunction string TextFilterResult:GetNonChatStringForBroadcastAsync()
	YieldFunction string TextFilterResult:GetNonChatStringForUserAsync(int64 toUserId)
Class TextService : Instance
	Function Vector2 TextService:GetTextSize(string string, int fontSize, Font font, Vector2 frameSize)
	YieldFunction Instance TextService:FilterStringAsync(string stringToFilter, int64 fromUserId, TextFilterContext textContext = PrivateChat)
Class ThirdPartyUserService : Instance [notCreatable]
	Function string ThirdPartyUserService:GetUserDisplayName() [RobloxScriptSecurity]
	Function string ThirdPartyUserService:GetUserPlatformId() [RobloxScriptSecurity]
	Function bool ThirdPartyUserService:HaveActiveUser() [RobloxScriptSecurity]
	Function void ThirdPartyUserService:ReturnToEngagement() [RobloxScriptSecurity]
	Function void ThirdPartyUserService:ShowAccountPicker() [RobloxScriptSecurity]
	YieldFunction int ThirdPartyUserService:RegisterActiveUser(UserInputType gamepadId) [RobloxScriptSecurity]
	Event ThirdPartyUserService.ActiveGamepadAdded() [RobloxScriptSecurity]
	Event ThirdPartyUserService.ActiveGamepadRemoved() [RobloxScriptSecurity]
	Event ThirdPartyUserService.ActiveUserSignedOut(int signOutStatus) [RobloxScriptSecurity]
Class TimerService : Instance [notCreatable]
Class Toolbar : Instance
	Function Instance Toolbar:CreateButton(string text, string tooltip, string iconname) [PluginSecurity]
Class TouchInputService : Instance
Class TouchTransmitter : Instance [notbrowsable] [notCreatable]
Class Trail : Instance
	Property Class:Attachment Trail.Attachment0
	Property Class:Attachment Trail.Attachment1
	Property ColorSequence Trail.Color
	Property bool Trail.Enabled
	Property bool Trail.FaceCamera
	Property float Trail.Lifetime
	Property float Trail.LightEmission
	Property float Trail.LightInfluence
	Property float Trail.MaxLength
	Property float Trail.MinLength
	Property Content Trail.Texture
	Property float Trail.TextureLength
	Property TextureMode Trail.TextureMode
	Property NumberSequence Trail.Transparency
	Property NumberSequence Trail.WidthScale
	Function void Trail:Clear()
Class Translator : Instance [notCreatable]
	Property string Translator.LocaleId [readonly]
	Function string Translator:FormatByKey(string key, Variant args)
	Function string Translator:RobloxOnlyTranslate(Instance context, string text) [RobloxScriptSecurity]
	Function string Translator:Translate(Instance context, string text)
Class TweenBase : Instance [notbrowsable]
	Property PlaybackState TweenBase.PlaybackState [readonly]
	Function void TweenBase:Cancel()
	Function void TweenBase:Pause()
	Function void TweenBase:Play()
	Event TweenBase.Completed(PlaybackState playbackState)
Class Tween : TweenBase
	Property Class:Instance Tween.Instance [readonly]
	Property TweenInfo Tween.TweenInfo [readonly]
Class TweenService : Instance
	Function Instance TweenService:Create(Instance instance, TweenInfo tweenInfo, Dictionary propertyTable)
Class UIBase : Instance
Class UIComponent : UIBase
Class UIConstraint : UIComponent
Class UIAspectRatioConstraint : UIConstraint
	Property float UIAspectRatioConstraint.AspectRatio
	Property AspectType UIAspectRatioConstraint.AspectType
	Property DominantAxis UIAspectRatioConstraint.DominantAxis
Class UISizeConstraint : UIConstraint
	Property Vector2 UISizeConstraint.MaxSize
	Property Vector2 UISizeConstraint.MinSize
Class UITextSizeConstraint : UIConstraint
	Property int UITextSizeConstraint.MaxTextSize
	Property int UITextSizeConstraint.MinTextSize
Class UILayout : UIComponent
Class UIGridStyleLayout : UILayout [notbrowsable]
	Property Vector2 UIGridStyleLayout.AbsoluteContentSize [readonly]
	Property FillDirection UIGridStyleLayout.FillDirection
	Property HorizontalAlignment UIGridStyleLayout.HorizontalAlignment
	Property SortOrder UIGridStyleLayout.SortOrder
	Property VerticalAlignment UIGridStyleLayout.VerticalAlignment
	Function void UIGridStyleLayout:ApplyLayout()
	Function void UIGridStyleLayout:SetCustomSortFunction(Function function = nil) [deprecated]
Class UIGridLayout : UIGridStyleLayout
	Property UDim2 UIGridLayout.CellPadding
	Property UDim2 UIGridLayout.CellSize
	Property int UIGridLayout.FillDirectionMaxCells
	Property StartCorner UIGridLayout.StartCorner
Class UIListLayout : UIGridStyleLayout
	Property UDim UIListLayout.Padding
Class UIPageLayout : UIGridStyleLayout
	Property bool UIPageLayout.Animated
	Property bool UIPageLayout.Circular
	Property Class:GuiObject UIPageLayout.CurrentPage [readonly]
	Property EasingDirection UIPageLayout.EasingDirection
	Property EasingStyle UIPageLayout.EasingStyle
	Property bool UIPageLayout.GamepadInputEnabled
	Property UDim UIPageLayout.Padding
	Property bool UIPageLayout.ScrollWheelInputEnabled
	Property bool UIPageLayout.TouchInputEnabled
	Property float UIPageLayout.TweenTime
	Function void UIPageLayout:JumpTo(Instance page)
	Function void UIPageLayout:JumpToIndex(int index)
	Function void UIPageLayout:Next()
	Function void UIPageLayout:Previous()
	Event UIPageLayout.PageEnter(Instance page)
	Event UIPageLayout.PageLeave(Instance page)
	Event UIPageLayout.Stopped(Instance currentPage)
Class UITableLayout : UIGridStyleLayout
	Property bool UITableLayout.FillEmptySpaceColumns
	Property bool UITableLayout.FillEmptySpaceRows
	Property TableMajorAxis UITableLayout.MajorAxis
	Property UDim2 UITableLayout.Padding
Class UIPadding : UIComponent
	Property UDim UIPadding.PaddingBottom
	Property UDim UIPadding.PaddingLeft
	Property UDim UIPadding.PaddingRight
	Property UDim UIPadding.PaddingTop
Class UIScale : UIComponent
	Property float UIScale.Scale
Class UserGameSettings : Instance
	Property bool UserGameSettings.AllTutorialsDisabled [RobloxScriptSecurity]
	Property CustomCameraMode UserGameSettings.CameraMode [RobloxScriptSecurity]
	Property bool UserGameSettings.CameraYInverted [hidden] [RobloxScriptSecurity]
	Property bool UserGameSettings.ChatVisible [RobloxScriptSecurity]
	Property ComputerCameraMovementMode UserGameSettings.ComputerCameraMovementMode
	Property ComputerMovementMode UserGameSettings.ComputerMovementMode
	Property ControlMode UserGameSettings.ControlMode
	Property bool UserGameSettings.Fullscreen [RobloxScriptSecurity]
	Property float UserGameSettings.GamepadCameraSensitivity
	Property bool UserGameSettings.HasEverUsedVR [RobloxScriptSecurity]
	Property bool UserGameSettings.IsUsingCameraYInverted [hidden] [readonly] [RobloxScriptSecurity]
	Property bool UserGameSettings.IsUsingGamepadCameraSensitivity [hidden] [readonly] [RobloxScriptSecurity]
	Property float UserGameSettings.MasterVolume
	Property bool UserGameSettings.MicroProfilerWebServerEnabled [hidden] [RobloxScriptSecurity]
	Property string UserGameSettings.MicroProfilerWebServerIP [hidden] [readonly] [RobloxScriptSecurity]
	Property int UserGameSettings.MicroProfilerWebServerPort [hidden] [readonly] [RobloxScriptSecurity]
	Property float UserGameSettings.MouseSensitivity
	Property Vector2 UserGameSettings.MouseSensitivityFirstPerson [hidden] [RobloxScriptSecurity]
	Property Vector2 UserGameSettings.MouseSensitivityThirdPerson [hidden] [RobloxScriptSecurity]
	Property bool UserGameSettings.OnScreenProfilerEnabled [hidden] [RobloxScriptSecurity]
	Property string UserGameSettings.OnboardingsCompleted [RobloxScriptSecurity]
	Property bool UserGameSettings.PerformanceStatsVisible [hidden] [RobloxScriptSecurity]
	Property RotationType UserGameSettings.RotationType
	Property SavedQualitySetting UserGameSettings.SavedQualityLevel
	Property TouchCameraMovementMode UserGameSettings.TouchCameraMovementMode
	Property TouchMovementMode UserGameSettings.TouchMovementMode
	Property bool UserGameSettings.UsedCoreGuiIsVisibleToggle [RobloxScriptSecurity]
	Property bool UserGameSettings.UsedCustomGuiIsVisibleToggle [RobloxScriptSecurity]
	Property bool UserGameSettings.UsedHideHudShortcut [RobloxScriptSecurity]
	Property bool UserGameSettings.VREnabled [RobloxScriptSecurity]
	Property int UserGameSettings.VRRotationIntensity [RobloxScriptSecurity]
	Function int UserGameSettings:GetCameraYInvertValue()
	Function bool UserGameSettings:GetOnboardingCompleted(string onboardingId)
	Function bool UserGameSettings:GetTutorialState(string tutorialId) [RobloxScriptSecurity]
	Function bool UserGameSettings:InFullScreen()
	Function bool UserGameSettings:InStudioMode()
	Function void UserGameSettings:ResetOnboardingCompleted(string onboardingId) [RobloxScriptSecurity]
	Function void UserGameSettings:SetCameraYInvertVisible()
	Function void UserGameSettings:SetGamepadCameraSensitivityVisible()
	Function void UserGameSettings:SetOnboardingCompleted(string onboardingId)
	Function void UserGameSettings:SetTutorialState(string tutorialId, bool value) [RobloxScriptSecurity]
	Event UserGameSettings.FullscreenChanged(bool isFullscreen)
	Event UserGameSettings.PerformanceStatsVisibleChanged(bool isPerformanceStatsVisible) [RobloxScriptSecurity]
	Event UserGameSettings.StudioModeChanged(bool isStudioMode)
Class UserInputService : Instance [notCreatable]
	Property bool UserInputService.AccelerometerEnabled [readonly]
	Property Vector2 UserInputService.BottomBarSize [readonly] [RobloxScriptSecurity]
	Property bool UserInputService.GamepadEnabled [readonly]
	Property bool UserInputService.GazeSelectionEnabled [hidden] [RobloxScriptSecurity]
	Property bool UserInputService.GyroscopeEnabled [readonly]
	Property bool UserInputService.KeyboardEnabled [readonly]
	Property bool UserInputService.LegacyInputEventsEnabled [RobloxScriptSecurity]
	Property bool UserInputService.ModalEnabled
	Property MouseBehavior UserInputService.MouseBehavior
	Property float UserInputService.MouseDeltaSensitivity
	Property bool UserInputService.MouseEnabled [readonly]
	Property bool UserInputService.MouseIconEnabled
	Property Vector2 UserInputService.NavBarSize [readonly] [RobloxScriptSecurity]
	Property double UserInputService.OnScreenKeyboardAnimationDuration [readonly] [RobloxScriptSecurity]
	Property Vector2 UserInputService.OnScreenKeyboardPosition [readonly]
	Property Vector2 UserInputService.OnScreenKeyboardSize [readonly]
	Property bool UserInputService.OnScreenKeyboardVisible [readonly]
	Property OverrideMouseIconBehavior UserInputService.OverrideMouseIconBehavior [RobloxScriptSecurity]
	Property Vector2 UserInputService.StatusBarSize [readonly] [RobloxScriptSecurity]
	Property bool UserInputService.TouchEnabled [readonly]
	Property CoordinateFrame UserInputService.UserHeadCFrame [deprecated] [readonly]
	Property bool UserInputService.VREnabled [readonly]
	Function bool UserInputService:GamepadSupports(UserInputType gamepadNum, KeyCode gamepadKeyCode)
	Function Array UserInputService:GetConnectedGamepads()
	Function Instance UserInputService:GetDeviceAcceleration()
	Function Instance UserInputService:GetDeviceGravity()
	Function Tuple UserInputService:GetDeviceRotation()
	Function Instance UserInputService:GetFocusedTextBox()
	Function bool UserInputService:GetGamepadConnected(UserInputType gamepadNum)
	Function Array UserInputService:GetGamepadState(UserInputType gamepadNum)
	Function Array UserInputService:GetKeysPressed()
	Function UserInputType UserInputService:GetLastInputType()
	Function Array UserInputService:GetMouseButtonsPressed()
	Function Vector2 UserInputService:GetMouseDelta()
	Function Vector2 UserInputService:GetMouseLocation()
	Function Array UserInputService:GetNavigationGamepads()
	Function Platform UserInputService:GetPlatform() [RobloxScriptSecurity]
	Function Array UserInputService:GetSupportedGamepadKeyCodes(UserInputType gamepadNum)
	Function CoordinateFrame UserInputService:GetUserCFrame(UserCFrame type)
	Function bool UserInputService:IsGamepadButtonDown(UserInputType gamepadNum, KeyCode gamepadKeyCode)
	Function bool UserInputService:IsKeyDown(KeyCode keyCode)
	Function bool UserInputService:IsMouseButtonPressed(UserInputType mouseButton)
	Function bool UserInputService:IsNavigationGamepad(UserInputType gamepadEnum)
	Function void UserInputService:RecenterUserHeadCFrame()
	Function void UserInputService:SendAppUISizes(Vector2 statusBarSize, Vector2 navBarSize, Vector2 bottomBarSize) [RobloxScriptSecurity]
	Function void UserInputService:SetNavigationGamepad(UserInputType gamepadEnum, bool enabled)
	Event UserInputService.DeviceAccelerationChanged(Instance acceleration)
	Event UserInputService.DeviceGravityChanged(Instance gravity)
	Event UserInputService.DeviceRotationChanged(Instance rotation, CoordinateFrame cframe)
	Event UserInputService.GamepadConnected(UserInputType gamepadNum)
	Event UserInputService.GamepadDisconnected(UserInputType gamepadNum)
	Event UserInputService.InputBegan(Instance input, bool gameProcessedEvent)
	Event UserInputService.InputChanged(Instance input, bool gameProcessedEvent)
	Event UserInputService.InputEnded(Instance input, bool gameProcessedEvent)
	Event UserInputService.JumpRequest()
	Event UserInputService.LastInputTypeChanged(UserInputType lastInputType)
	Event UserInputService.StatusBarTapped(Vector2 position) [RobloxScriptSecurity]
	Event UserInputService.TextBoxFocusReleased(Instance textboxReleased)
	Event UserInputService.TextBoxFocused(Instance textboxFocused)
	Event UserInputService.TouchEnded(Instance touch, bool gameProcessedEvent)
	Event UserInputService.TouchLongPress(Array touchPositions, UserInputState state, bool gameProcessedEvent)
	Event UserInputService.TouchMoved(Instance touch, bool gameProcessedEvent)
	Event UserInputService.TouchPan(Array touchPositions, Vector2 totalTranslation, Vector2 velocity, UserInputState state, bool gameProcessedEvent)
	Event UserInputService.TouchPinch(Array touchPositions, float scale, float velocity, UserInputState state, bool gameProcessedEvent)
	Event UserInputService.TouchRotate(Array touchPositions, float rotation, float velocity, UserInputState state, bool gameProcessedEvent)
	Event UserInputService.TouchStarted(Instance touch, bool gameProcessedEvent)
	Event UserInputService.TouchSwipe(SwipeDirection swipeDirection, int numberOfTouches, bool gameProcessedEvent)
	Event UserInputService.TouchTap(Array touchPositions, bool gameProcessedEvent)
	Event UserInputService.TouchTapInWorld(Vector2 position, bool processedByUI)
	Event UserInputService.UserCFrameChanged(UserCFrame type, CoordinateFrame value)
	Event UserInputService.WindowFocusReleased()
	Event UserInputService.WindowFocused()
Class VRService : Instance
	Property UserCFrame VRService.GuiInputUserCFrame
	Property string VRService.VRDeviceName [readonly] [RobloxScriptSecurity]
	Property bool VRService.VREnabled [readonly]
	Function VRTouchpadMode VRService:GetTouchpadMode(VRTouchpad pad)
	Function CoordinateFrame VRService:GetUserCFrame(UserCFrame type)
	Function bool VRService:GetUserCFrameEnabled(UserCFrame type)
	Function void VRService:RecenterUserHeadCFrame()
	Function void VRService:RequestNavigation(CoordinateFrame cframe, UserCFrame inputUserCFrame)
	Function void VRService:SetTouchpadMode(VRTouchpad pad, VRTouchpadMode mode)
	Event VRService.NavigationRequested(CoordinateFrame cframe, UserCFrame inputUserCFrame)
	Event VRService.TouchpadModeChanged(VRTouchpad pad, VRTouchpadMode mode)
	Event VRService.UserCFrameChanged(UserCFrame type, CoordinateFrame value)
	Event VRService.UserCFrameEnabled(UserCFrame type, bool enabled)
Class ValueBase : Instance
Class BinaryStringValue : ValueBase
	Event BinaryStringValue.Changed(BinaryString value)
Class BoolValue : ValueBase
	Property bool BoolValue.Value
	Event BoolValue.Changed(bool value)
	Event BoolValue.changed(bool value) [deprecated]
Class BrickColorValue : ValueBase
	Property BrickColor BrickColorValue.Value
	Event BrickColorValue.Changed(BrickColor value)
	Event BrickColorValue.changed(BrickColor value) [deprecated]
Class CFrameValue : ValueBase
	Property CoordinateFrame CFrameValue.Value
	Event CFrameValue.Changed(CoordinateFrame value)
	Event CFrameValue.changed(CoordinateFrame value) [deprecated]
Class Color3Value : ValueBase
	Property Color3 Color3Value.Value
	Event Color3Value.Changed(Color3 value)
	Event Color3Value.changed(Color3 value) [deprecated]
Class DoubleConstrainedValue : ValueBase [deprecated]
	Property double DoubleConstrainedValue.ConstrainedValue [hidden]
	Property double DoubleConstrainedValue.MaxValue
	Property double DoubleConstrainedValue.MinValue
	Property double DoubleConstrainedValue.Value
	Event DoubleConstrainedValue.Changed(double value)
	Event DoubleConstrainedValue.changed(double value) [deprecated]
Class IntConstrainedValue : ValueBase [deprecated]
	Property int64 IntConstrainedValue.ConstrainedValue [hidden]
	Property int64 IntConstrainedValue.MaxValue
	Property int64 IntConstrainedValue.MinValue
	Property int64 IntConstrainedValue.Value
	Event IntConstrainedValue.Changed(int64 value)
	Event IntConstrainedValue.changed(int64 value) [deprecated]
Class IntValue : ValueBase
	Property int64 IntValue.Value
	Event IntValue.Changed(int64 value)
	Event IntValue.changed(int64 value) [deprecated]
Class NumberValue : ValueBase
	Property double NumberValue.Value
	Event NumberValue.Changed(double value)
	Event NumberValue.changed(double value) [deprecated]
Class ObjectValue : ValueBase
	Property Class:Instance ObjectValue.Value
	Event ObjectValue.Changed(Instance value)
	Event ObjectValue.changed(Instance value) [deprecated]
Class RayValue : ValueBase
	Property Ray RayValue.Value
	Event RayValue.Changed(Ray value)
	Event RayValue.changed(Ray value) [deprecated]
Class StringValue : ValueBase
	Property string StringValue.Value
	Event StringValue.Changed(string value)
	Event StringValue.changed(string value) [deprecated]
Class Vector3Value : ValueBase
	Property Vector3 Vector3Value.Value
	Event Vector3Value.Changed(Vector3 value)
	Event Vector3Value.changed(Vector3 value) [deprecated]
Class VirtualInputManager : Instance
	Property string VirtualInputManager.AdditionalLuaState [RobloxScriptSecurity]
	Function void VirtualInputManager:Dump() [RobloxScriptSecurity]
	Function void VirtualInputManager:HandleGamepadAxisInput(int objectId, KeyCode keyCode, float x, float y, float z) [RobloxScriptSecurity]
	Function void VirtualInputManager:HandleGamepadButtonInput(int deviceId, KeyCode keyCode, int buttonState) [RobloxScriptSecurity]
	Function void VirtualInputManager:HandleGamepadConnect(int deviceId) [RobloxScriptSecurity]
	Function void VirtualInputManager:HandleGamepadDisconnect(int deviceId) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendAccelerometerEvent(float x, float y, float z) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendGravityEvent(float x, float y, float z) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendGyroscopeEvent(float quatX, float quatY, float quatZ, float quatW) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendKeyEvent(bool isPressed, KeyCode keyCode, bool isRepeatedKey, Instance pluginGui) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendMouseButtonEvent(int x, int y, int mouseButton, bool isDown, Instance pluginGui) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendMouseMoveEvent(float x, float y, Instance pluginGui) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendMouseWheelEvent(float x, float y, bool isForwardScroll, Instance pluginGui) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendTextInputCharacterEvent(string str, Instance pluginGui) [RobloxScriptSecurity]
	Function void VirtualInputManager:SendTouchEvent(int64 touchId, int state, float x, float y) [RobloxScriptSecurity]
	Function void VirtualInputManager:StartPlaying(string fileName) [RobloxScriptSecurity]
	Function void VirtualInputManager:StartRecording() [RobloxScriptSecurity]
	Function void VirtualInputManager:StopRecording() [RobloxScriptSecurity]
	Function void VirtualInputManager:sendRobloxEvent(string namespace, string detail, string detailType) [RobloxScriptSecurity]
	Event VirtualInputManager.PlaybackCompleted(string additionalLuaState) [RobloxScriptSecurity]
	Event VirtualInputManager.RecordingCompleted(string result) [RobloxScriptSecurity]
Class VirtualUser : Instance [notCreatable]
	Function void VirtualUser:Button1Down(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:Button1Up(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:Button2Down(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:Button2Up(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:CaptureController() [LocalUserSecurity]
	Function void VirtualUser:ClickButton1(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:ClickButton2(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:MoveMouse(Vector2 position, CoordinateFrame camera = Identity) [LocalUserSecurity]
	Function void VirtualUser:SetKeyDown(string key) [LocalUserSecurity]
	Function void VirtualUser:SetKeyUp(string key) [LocalUserSecurity]
	Function void VirtualUser:StartRecording() [LocalUserSecurity]
	Function string VirtualUser:StopRecording() [LocalUserSecurity]
	Function void VirtualUser:TypeKey(string key) [LocalUserSecurity]
Class Visit : Instance [notCreatable]
Class WeldConstraint : Instance
	Property bool WeldConstraint.Enabled
	Property Class:BasePart WeldConstraint.Part0
	Property Class:BasePart WeldConstraint.Part1
Enum ActionType
	EnumItem ActionType.Nothing : 0
	EnumItem ActionType.Pause : 1
	EnumItem ActionType.Lose : 2
	EnumItem ActionType.Draw : 3
	EnumItem ActionType.Win : 4
Enum ActuatorRelativeTo
	EnumItem ActuatorRelativeTo.Attachment0 : 0
	EnumItem ActuatorRelativeTo.Attachment1 : 1
	EnumItem ActuatorRelativeTo.World : 2
Enum ActuatorType
	EnumItem ActuatorType.None : 0
	EnumItem ActuatorType.Motor : 1
	EnumItem ActuatorType.Servo : 2
Enum AnimationPriority
	EnumItem AnimationPriority.Idle : 0
	EnumItem AnimationPriority.Movement : 1
	EnumItem AnimationPriority.Action : 2
	EnumItem AnimationPriority.Core : 1000
Enum AppShellActionType
	EnumItem AppShellActionType.None : 0
	EnumItem AppShellActionType.OpenApp : 1
	EnumItem AppShellActionType.TapChatTab : 2
	EnumItem AppShellActionType.TapConversationEntry : 3
	EnumItem AppShellActionType.TapAvatarTab : 4
	EnumItem AppShellActionType.ReadConversation : 5
	EnumItem AppShellActionType.TapGamePageTab : 6
	EnumItem AppShellActionType.TapHomePageTab : 7
	EnumItem AppShellActionType.GamePageLoaded : 8
	EnumItem AppShellActionType.HomePageLoaded : 9
	EnumItem AppShellActionType.AvatarEditorPageLoaded : 10
Enum AspectType
	EnumItem AspectType.FitWithinMaxSize : 0
	EnumItem AspectType.ScaleWithParentSize : 1
Enum AssetType
	EnumItem AssetType.Image : 1
	EnumItem AssetType.TeeShirt : 2
	EnumItem AssetType.Audio : 3
	EnumItem AssetType.Mesh : 4
	EnumItem AssetType.Lua : 5
	EnumItem AssetType.Hat : 8
	EnumItem AssetType.Place : 9
	EnumItem AssetType.Model : 10
	EnumItem AssetType.Shirt : 11
	EnumItem AssetType.Pants : 12
	EnumItem AssetType.Decal : 13
	EnumItem AssetType.Head : 17
	EnumItem AssetType.Face : 18
	EnumItem AssetType.Gear : 19
	EnumItem AssetType.Badge : 21
	EnumItem AssetType.Animation : 24
	EnumItem AssetType.Torso : 27
	EnumItem AssetType.RightArm : 28
	EnumItem AssetType.LeftArm : 29
	EnumItem AssetType.LeftLeg : 30
	EnumItem AssetType.RightLeg : 31
	EnumItem AssetType.Package : 32
	EnumItem AssetType.GamePass : 34
	EnumItem AssetType.Plugin : 38
	EnumItem AssetType.MeshPart : 40
	EnumItem AssetType.HairAccessory : 41
	EnumItem AssetType.FaceAccessory : 42
	EnumItem AssetType.NeckAccessory : 43
	EnumItem AssetType.ShoulderAccessory : 44
	EnumItem AssetType.FrontAccessory : 45
	EnumItem AssetType.BackAccessory : 46
	EnumItem AssetType.WaistAccessory : 47
	EnumItem AssetType.ClimbAnimation : 48
	EnumItem AssetType.DeathAnimation : 49
	EnumItem AssetType.FallAnimation : 50
	EnumItem AssetType.IdleAnimation : 51
	EnumItem AssetType.JumpAnimation : 52
	EnumItem AssetType.RunAnimation : 53
	EnumItem AssetType.SwimAnimation : 54
	EnumItem AssetType.WalkAnimation : 55
	EnumItem AssetType.PoseAnimation : 56
	EnumItem AssetType.EarAccessory : 57
	EnumItem AssetType.EyeAccessory : 58
Enum AutoJointsMode
	EnumItem AutoJointsMode.Default : 0
	EnumItem AutoJointsMode.Explicit : 1
	EnumItem AutoJointsMode.LegacyImplicit : 2
Enum AvatarContextMenuOption
	EnumItem AvatarContextMenuOption.Friend : 0
	EnumItem AvatarContextMenuOption.Chat : 1
	EnumItem AvatarContextMenuOption.Emote : 2
Enum AvatarJointPositionType
	EnumItem AvatarJointPositionType.Fixed : 0
	EnumItem AvatarJointPositionType.ArtistIntent : 1
Enum Axis
	EnumItem Axis.X : 0
	EnumItem Axis.Y : 1
	EnumItem Axis.Z : 2
Enum BinType
	EnumItem BinType.Script : 0
	EnumItem BinType.GameTool : 1
	EnumItem BinType.Grab : 2
	EnumItem BinType.Clone : 3
	EnumItem BinType.Hammer : 4
Enum BodyPart
	EnumItem BodyPart.Head : 0
	EnumItem BodyPart.Torso : 1
	EnumItem BodyPart.LeftArm : 2
	EnumItem BodyPart.RightArm : 3
	EnumItem BodyPart.LeftLeg : 4
	EnumItem BodyPart.RightLeg : 5
Enum BodyPartR15
	EnumItem BodyPartR15.Head : 0
	EnumItem BodyPartR15.UpperTorso : 1
	EnumItem BodyPartR15.LowerTorso : 2
	EnumItem BodyPartR15.LeftFoot : 3
	EnumItem BodyPartR15.LeftLowerLeg : 4
	EnumItem BodyPartR15.LeftUpperLeg : 5
	EnumItem BodyPartR15.RightFoot : 6
	EnumItem BodyPartR15.RightLowerLeg : 7
	EnumItem BodyPartR15.RightUpperLeg : 8
	EnumItem BodyPartR15.LeftHand : 9
	EnumItem BodyPartR15.LeftLowerArm : 10
	EnumItem BodyPartR15.LeftUpperArm : 11
	EnumItem BodyPartR15.RightHand : 12
	EnumItem BodyPartR15.RightLowerArm : 13
	EnumItem BodyPartR15.RightUpperArm : 14
	EnumItem BodyPartR15.RootPart : 15
	EnumItem BodyPartR15.Unknown : 17
Enum Button
	EnumItem Button.Jump : 32
	EnumItem Button.Dismount : 8
Enum ButtonStyle
	EnumItem ButtonStyle.Custom : 0
	EnumItem ButtonStyle.RobloxButtonDefault : 1
	EnumItem ButtonStyle.RobloxButton : 2
	EnumItem ButtonStyle.RobloxRoundButton : 3
	EnumItem ButtonStyle.RobloxRoundDefaultButton : 4
	EnumItem ButtonStyle.RobloxRoundDropdownButton : 5
Enum CameraMode
	EnumItem CameraMode.Classic : 0
	EnumItem CameraMode.LockFirstPerson : 1
Enum CameraPanMode
	EnumItem CameraPanMode.Classic : 0
	EnumItem CameraPanMode.EdgeBump : 1
Enum CameraType
	EnumItem CameraType.Fixed : 0
	EnumItem CameraType.Watch : 2
	EnumItem CameraType.Attach : 1
	EnumItem CameraType.Track : 3
	EnumItem CameraType.Follow : 4
	EnumItem CameraType.Custom : 5
	EnumItem CameraType.Scriptable : 6
	EnumItem CameraType.Orbital : 7
Enum CellBlock
	EnumItem CellBlock.Solid : 0
	EnumItem CellBlock.VerticalWedge : 1
	EnumItem CellBlock.CornerWedge : 2
	EnumItem CellBlock.InverseCornerWedge : 3
	EnumItem CellBlock.HorizontalWedge : 4
Enum CellMaterial
	EnumItem CellMaterial.Empty : 0
	EnumItem CellMaterial.Grass : 1
	EnumItem CellMaterial.Sand : 2
	EnumItem CellMaterial.Brick : 3
	EnumItem CellMaterial.Granite : 4
	EnumItem CellMaterial.Asphalt : 5
	EnumItem CellMaterial.Iron : 6
	EnumItem CellMaterial.Aluminum : 7
	EnumItem CellMaterial.Gold : 8
	EnumItem CellMaterial.WoodPlank : 9
	EnumItem CellMaterial.WoodLog : 10
	EnumItem CellMaterial.Gravel : 11
	EnumItem CellMaterial.CinderBlock : 12
	EnumItem CellMaterial.MossyStone : 13
	EnumItem CellMaterial.Cement : 14
	EnumItem CellMaterial.RedPlastic : 15
	EnumItem CellMaterial.BluePlastic : 16
	EnumItem CellMaterial.Water : 17
Enum CellOrientation
	EnumItem CellOrientation.NegZ : 0
	EnumItem CellOrientation.X : 1
	EnumItem CellOrientation.Z : 2
	EnumItem CellOrientation.NegX : 3
Enum CenterDialogType
	EnumItem CenterDialogType.UnsolicitedDialog : 1
	EnumItem CenterDialogType.PlayerInitiatedDialog : 2
	EnumItem CenterDialogType.ModalDialog : 3
	EnumItem CenterDialogType.QuitDialog : 4
Enum ChatCallbackType
	EnumItem ChatCallbackType.OnCreatingChatWindow : 1
	EnumItem ChatCallbackType.OnClientSendingMessage : 2
	EnumItem ChatCallbackType.OnClientFormattingMessage : 3
	EnumItem ChatCallbackType.OnServerReceivingMessage : 17
Enum ChatColor
	EnumItem ChatColor.Blue : 0
	EnumItem ChatColor.Green : 1
	EnumItem ChatColor.Red : 2
	EnumItem ChatColor.White : 3
Enum ChatMode
	EnumItem ChatMode.Menu : 0
	EnumItem ChatMode.TextAndMenu : 1
Enum ChatPrivacyMode
	EnumItem ChatPrivacyMode.AllUsers : 0
	EnumItem ChatPrivacyMode.NoOne : 1
	EnumItem ChatPrivacyMode.Friends : 2
Enum ChatStyle
	EnumItem ChatStyle.Classic : 0
	EnumItem ChatStyle.Bubble : 1
	EnumItem ChatStyle.ClassicAndBubble : 2
Enum CollisionFidelity
	EnumItem CollisionFidelity.Default : 0
	EnumItem CollisionFidelity.Hull : 1
	EnumItem CollisionFidelity.Box : 2
Enum ComputerCameraMovementMode
	EnumItem ComputerCameraMovementMode.Default : 0
	EnumItem ComputerCameraMovementMode.Follow : 2
	EnumItem ComputerCameraMovementMode.Classic : 1
	EnumItem ComputerCameraMovementMode.Orbital : 3
Enum ComputerMovementMode
	EnumItem ComputerMovementMode.Default : 0
	EnumItem ComputerMovementMode.KeyboardMouse : 1
	EnumItem ComputerMovementMode.ClickToMove : 2
Enum ConnectionError
	EnumItem ConnectionError.OK : 0
	EnumItem ConnectionError.DisconnectErrors : 256
	EnumItem ConnectionError.DisconnectBadhash : 257
	EnumItem ConnectionError.DisconnectSecurityKeyMismatch : 258
	EnumItem ConnectionError.DisconnectNewSecurityKeyMismatch : 272
	EnumItem ConnectionError.DisconnectProtocolMismatch : 259
	EnumItem ConnectionError.DisconnectReceivePacketError : 260
	EnumItem ConnectionError.DisconnectReceivePacketStreamError : 261
	EnumItem ConnectionError.DisconnectSendPacketError : 262
	EnumItem ConnectionError.DisconnectIllegalTeleport : 263
	EnumItem ConnectionError.DisconnectDuplicatePlayer : 264
	EnumItem ConnectionError.DisconnectDuplicateTicket : 265
	EnumItem ConnectionError.DisconnectTimeout : 266
	EnumItem ConnectionError.DisconnectLuaKick : 267
	EnumItem ConnectionError.DisconnectOnRemoteSysStats : 268
	EnumItem ConnectionError.DisconnectHashTimeout : 269
	EnumItem ConnectionError.DisconnectCloudEditKick : 270
	EnumItem ConnectionError.DisconnectPlayerless : 271
	EnumItem ConnectionError.DisconnectEvicted : 273
	EnumItem ConnectionError.DisconnectDevMaintenance : 274
	EnumItem ConnectionError.DisconnectRobloxMaintenance : 275
	EnumItem ConnectionError.DisconnectRejoin : 276
	EnumItem ConnectionError.DisconnectConnectionLost : 277
	EnumItem ConnectionError.PlacelaunchErrors : 512
	EnumItem ConnectionError.PlacelaunchDisabled : 515
	EnumItem ConnectionError.PlacelauchError : 516
	EnumItem ConnectionError.PlacelaunchGameEnded : 517
	EnumItem ConnectionError.PlacelaunchGameFull : 518
	EnumItem ConnectionError.PlacelaunchUserLeft : 522
	EnumItem ConnectionError.PlacelaunchRestricted : 523
	EnumItem ConnectionError.PlacelaunchUnauthorized : 524
	EnumItem ConnectionError.PlacelaunchFlooded : 525
	EnumItem ConnectionError.PlacelaunchHashExpired : 526
	EnumItem ConnectionError.PlacelaunchHashException : 527
	EnumItem ConnectionError.PlacelaunchPartyCannotFit : 528
	EnumItem ConnectionError.PlacelaunchHttpError : 529
	EnumItem ConnectionError.PlacelaunchCustomMessage : 610
	EnumItem ConnectionError.PlacelaunchOtherError : 611
	EnumItem ConnectionError.TeleportErrors : 768
	EnumItem ConnectionError.TeleportFailure : 769
	EnumItem ConnectionError.TeleportGameNotFound : 770
	EnumItem ConnectionError.TeleportGameEnded : 771
	EnumItem ConnectionError.TeleportGameFull : 772
	EnumItem ConnectionError.TeleportUnauthorized : 773
	EnumItem ConnectionError.TeleportFlooded : 774
	EnumItem ConnectionError.TeleportIsTeleporting : 775
Enum ConnectionState
	EnumItem ConnectionState.Connected : 0
	EnumItem ConnectionState.Disconnected : 1
Enum ContextActionPriority
	EnumItem ContextActionPriority.Low : 1000
	EnumItem ContextActionPriority.Medium : 2000
	EnumItem ContextActionPriority.Default : 2000
	EnumItem ContextActionPriority.High : 3000
Enum ContextActionResult
	EnumItem ContextActionResult.Pass : 1
	EnumItem ContextActionResult.Sink : 0
Enum ControlMode
	EnumItem ControlMode.MouseLockSwitch : 1
	EnumItem ControlMode.Classic : 0
Enum CoreGuiType
	EnumItem CoreGuiType.PlayerList : 0
	EnumItem CoreGuiType.Health : 1
	EnumItem CoreGuiType.Backpack : 2
	EnumItem CoreGuiType.Chat : 3
	EnumItem CoreGuiType.All : 4
Enum CreatorType
	EnumItem CreatorType.User : 0
	EnumItem CreatorType.Group : 1
Enum CurrencyType
	EnumItem CurrencyType.Default : 0
	EnumItem CurrencyType.Robux : 1
	EnumItem CurrencyType.Tix : 2
Enum CustomCameraMode
	EnumItem CustomCameraMode.Default : 0
	EnumItem CustomCameraMode.Follow : 2
	EnumItem CustomCameraMode.Classic : 1
Enum DataStoreRequestType
	EnumItem DataStoreRequestType.GetAsync : 0
	EnumItem DataStoreRequestType.SetIncrementAsync : 1
	EnumItem DataStoreRequestType.UpdateAsync : 2
	EnumItem DataStoreRequestType.GetSortedAsync : 3
	EnumItem DataStoreRequestType.SetIncrementSortedAsync : 4
	EnumItem DataStoreRequestType.OnUpdate : 5
Enum DevCameraOcclusionMode
	EnumItem DevCameraOcclusionMode.Zoom : 0
	EnumItem DevCameraOcclusionMode.Invisicam : 1
Enum DevComputerCameraMovementMode
	EnumItem DevComputerCameraMovementMode.UserChoice : 0
	EnumItem DevComputerCameraMovementMode.Classic : 1
	EnumItem DevComputerCameraMovementMode.Follow : 2
	EnumItem DevComputerCameraMovementMode.Orbital : 3
Enum DevComputerMovementMode
	EnumItem DevComputerMovementMode.UserChoice : 0
	EnumItem DevComputerMovementMode.KeyboardMouse : 1
	EnumItem DevComputerMovementMode.ClickToMove : 2
	EnumItem DevComputerMovementMode.Scriptable : 3
Enum DevTouchCameraMovementMode
	EnumItem DevTouchCameraMovementMode.UserChoice : 0
	EnumItem DevTouchCameraMovementMode.Classic : 1
	EnumItem DevTouchCameraMovementMode.Follow : 2
	EnumItem DevTouchCameraMovementMode.Orbital : 3
Enum DevTouchMovementMode
	EnumItem DevTouchMovementMode.UserChoice : 0
	EnumItem DevTouchMovementMode.Thumbstick : 1
	EnumItem DevTouchMovementMode.DPad : 2
	EnumItem DevTouchMovementMode.Thumbpad : 3
	EnumItem DevTouchMovementMode.ClickToMove : 4
	EnumItem DevTouchMovementMode.Scriptable : 5
	EnumItem DevTouchMovementMode.DynamicThumbstick : 6
Enum DeveloperMemoryTag
	EnumItem DeveloperMemoryTag.Internal : 0
	EnumItem DeveloperMemoryTag.HttpCache : 1
	EnumItem DeveloperMemoryTag.Instances : 2
	EnumItem DeveloperMemoryTag.Signals : 3
	EnumItem DeveloperMemoryTag.LuaHeap : 4
	EnumItem DeveloperMemoryTag.Script : 5
	EnumItem DeveloperMemoryTag.PhysicsCollision : 6
	EnumItem DeveloperMemoryTag.PhysicsParts : 7
	EnumItem DeveloperMemoryTag.GraphicsSolidModels : 8
	EnumItem DeveloperMemoryTag.GraphicsMeshParts : 9
	EnumItem DeveloperMemoryTag.GraphicsParticles : 10
	EnumItem DeveloperMemoryTag.GraphicsParts : 11
	EnumItem DeveloperMemoryTag.GraphicsSpatialHash : 12
	EnumItem DeveloperMemoryTag.GraphicsTerrain : 13
	EnumItem DeveloperMemoryTag.GraphicsTexture : 14
	EnumItem DeveloperMemoryTag.GraphicsTextureCharacter : 15
	EnumItem DeveloperMemoryTag.Sounds : 16
	EnumItem DeveloperMemoryTag.StreamingSounds : 17
	EnumItem DeveloperMemoryTag.TerrainVoxels : 18
	EnumItem DeveloperMemoryTag.Gui : 20
	EnumItem DeveloperMemoryTag.Animation : 21
	EnumItem DeveloperMemoryTag.Navigation : 22
Enum DialogBehaviorType
	EnumItem DialogBehaviorType.SinglePlayer : 0
	EnumItem DialogBehaviorType.MultiplePlayers : 1
Enum DialogPurpose
	EnumItem DialogPurpose.Quest : 0
	EnumItem DialogPurpose.Help : 1
	EnumItem DialogPurpose.Shop : 2
Enum DialogTone
	EnumItem DialogTone.Neutral : 0
	EnumItem DialogTone.Friendly : 1
	EnumItem DialogTone.Enemy : 2
Enum DominantAxis
	EnumItem DominantAxis.Width : 0
	EnumItem DominantAxis.Height : 1
Enum EasingDirection
	EnumItem EasingDirection.In : 0
	EnumItem EasingDirection.Out : 1
	EnumItem EasingDirection.InOut : 2
Enum EasingStyle
	EnumItem EasingStyle.Linear : 0
	EnumItem EasingStyle.Sine : 1
	EnumItem EasingStyle.Back : 2
	EnumItem EasingStyle.Quad : 3
	EnumItem EasingStyle.Quart : 4
	EnumItem EasingStyle.Quint : 5
	EnumItem EasingStyle.Bounce : 6
	EnumItem EasingStyle.Elastic : 7
Enum ElasticBehavior
	EnumItem ElasticBehavior.WhenScrollable : 0
	EnumItem ElasticBehavior.Always : 1
	EnumItem ElasticBehavior.Never : 2
Enum EnviromentalPhysicsThrottle
	EnumItem EnviromentalPhysicsThrottle.DefaultAuto : 0
	EnumItem EnviromentalPhysicsThrottle.Disabled : 1
	EnumItem EnviromentalPhysicsThrottle.Always : 2
	EnumItem EnviromentalPhysicsThrottle.Skip2 : 3
	EnumItem EnviromentalPhysicsThrottle.Skip4 : 4
	EnumItem EnviromentalPhysicsThrottle.Skip8 : 5
	EnumItem EnviromentalPhysicsThrottle.Skip16 : 6
Enum ErrorReporting
	EnumItem ErrorReporting.DontReport : 0
	EnumItem ErrorReporting.Prompt : 1
	EnumItem ErrorReporting.Report : 2
Enum ExplosionType
	EnumItem ExplosionType.NoCraters : 0
	EnumItem ExplosionType.Craters : 1
	EnumItem ExplosionType.CratersAndDebris : 2
Enum FillDirection
	EnumItem FillDirection.Horizontal : 0
	EnumItem FillDirection.Vertical : 1
Enum FilterResult
	EnumItem FilterResult.Rejected : 1
	EnumItem FilterResult.Accepted : 0
Enum Font
	EnumItem Font.Legacy : 0
	EnumItem Font.Arial : 1
	EnumItem Font.ArialBold : 2
	EnumItem Font.SourceSans : 3
	EnumItem Font.SourceSansBold : 4
	EnumItem Font.SourceSansSemibold : 16
	EnumItem Font.SourceSansLight : 5
	EnumItem Font.SourceSansItalic : 6
	EnumItem Font.Bodoni : 7
	EnumItem Font.Garamond : 8
	EnumItem Font.Cartoon : 9
	EnumItem Font.Code : 10
	EnumItem Font.Highway : 11
	EnumItem Font.SciFi : 12
	EnumItem Font.Arcade : 13
	EnumItem Font.Fantasy : 14
	EnumItem Font.Antique : 15
Enum FontSize
	EnumItem FontSize.Size8 : 0
	EnumItem FontSize.Size9 : 1
	EnumItem FontSize.Size10 : 2
	EnumItem FontSize.Size11 : 3
	EnumItem FontSize.Size12 : 4
	EnumItem FontSize.Size14 : 5
	EnumItem FontSize.Size18 : 6
	EnumItem FontSize.Size24 : 7
	EnumItem FontSize.Size36 : 8
	EnumItem FontSize.Size48 : 9
	EnumItem FontSize.Size28 : 10
	EnumItem FontSize.Size32 : 11
	EnumItem FontSize.Size42 : 12
	EnumItem FontSize.Size60 : 13
	EnumItem FontSize.Size96 : 14
Enum FormFactor
	EnumItem FormFactor.Symmetric : 0
	EnumItem FormFactor.Brick : 1
	EnumItem FormFactor.Plate : 2
	EnumItem FormFactor.Custom : 3
Enum FrameStyle
	EnumItem FrameStyle.Custom : 0
	EnumItem FrameStyle.ChatBlue : 1
	EnumItem FrameStyle.RobloxSquare : 2
	EnumItem FrameStyle.RobloxRound : 3
	EnumItem FrameStyle.ChatGreen : 4
	EnumItem FrameStyle.ChatRed : 5
	EnumItem FrameStyle.DropShadow : 6
Enum FramerateManagerMode
	EnumItem FramerateManagerMode.Automatic : 0
	EnumItem FramerateManagerMode.On : 1
	EnumItem FramerateManagerMode.Off : 2
Enum FriendRequestEvent
	EnumItem FriendRequestEvent.Issue : 0
	EnumItem FriendRequestEvent.Revoke : 1
	EnumItem FriendRequestEvent.Accept : 2
	EnumItem FriendRequestEvent.Deny : 3
Enum FriendStatus
	EnumItem FriendStatus.Unknown : 0
	EnumItem FriendStatus.NotFriend : 1
	EnumItem FriendStatus.Friend : 2
	EnumItem FriendStatus.FriendRequestSent : 3
	EnumItem FriendStatus.FriendRequestReceived : 4
Enum FunctionalTestResult
	EnumItem FunctionalTestResult.Passed : 0
	EnumItem FunctionalTestResult.Warning : 1
	EnumItem FunctionalTestResult.Error : 2
Enum GameAvatarType
	EnumItem GameAvatarType.R6 : 0
	EnumItem GameAvatarType.R15 : 1
	EnumItem GameAvatarType.PlayerChoice : 2
Enum GearGenreSetting
	EnumItem GearGenreSetting.AllGenres : 0
	EnumItem GearGenreSetting.MatchingGenreOnly : 1
Enum GearType
	EnumItem GearType.MeleeWeapons : 0
	EnumItem GearType.RangedWeapons : 1
	EnumItem GearType.Explosives : 2
	EnumItem GearType.PowerUps : 3
	EnumItem GearType.NavigationEnhancers : 4
	EnumItem GearType.MusicalInstruments : 5
	EnumItem GearType.SocialItems : 6
	EnumItem GearType.BuildingTools : 7
	EnumItem GearType.Transport : 8
Enum Genre
	EnumItem Genre.All : 0
	EnumItem Genre.TownAndCity : 1
	EnumItem Genre.Fantasy : 2
	EnumItem Genre.SciFi : 3
	EnumItem Genre.Ninja : 4
	EnumItem Genre.Scary : 5
	EnumItem Genre.Pirate : 6
	EnumItem Genre.Adventure : 7
	EnumItem Genre.Sports : 8
	EnumItem Genre.Funny : 9
	EnumItem Genre.WildWest : 10
	EnumItem Genre.War : 11
	EnumItem Genre.SkatePark : 12
	EnumItem Genre.Tutorial : 13
Enum GraphicsMode
	EnumItem GraphicsMode.Automatic : 1
	EnumItem GraphicsMode.Direct3D9 : 3
	EnumItem GraphicsMode.Direct3D11 : 2
	EnumItem GraphicsMode.OpenGL : 4
	EnumItem GraphicsMode.Metal : 5
	EnumItem GraphicsMode.Vulkan : 6
	EnumItem GraphicsMode.NoGraphics : 7
Enum HandlesStyle
	EnumItem HandlesStyle.Resize : 0
	EnumItem HandlesStyle.Movement : 1
Enum HorizontalAlignment
	EnumItem HorizontalAlignment.Center : 0
	EnumItem HorizontalAlignment.Left : 1
	EnumItem HorizontalAlignment.Right : 2
Enum HttpCachePolicy
	EnumItem HttpCachePolicy.None : 0
	EnumItem HttpCachePolicy.Full : 1
	EnumItem HttpCachePolicy.DataOnly : 2
	EnumItem HttpCachePolicy.Default : 3
	EnumItem HttpCachePolicy.InternalRedirectRefresh : 4
Enum HttpContentType
	EnumItem HttpContentType.ApplicationJson : 0
	EnumItem HttpContentType.ApplicationXml : 1
	EnumItem HttpContentType.ApplicationUrlEncoded : 2
	EnumItem HttpContentType.TextPlain : 3
	EnumItem HttpContentType.TextXml : 4
Enum HttpError
	EnumItem HttpError.OK : 0
	EnumItem HttpError.InvalidUrl : 1
	EnumItem HttpError.DnsResolve : 2
	EnumItem HttpError.ConnectFail : 3
	EnumItem HttpError.OutOfMemory : 4
	EnumItem HttpError.TimedOut : 5
	EnumItem HttpError.TooManyRedirects : 6
	EnumItem HttpError.InvalidRedirect : 7
	EnumItem HttpError.NetFail : 8
	EnumItem HttpError.Aborted : 9
	EnumItem HttpError.SslConnectFail : 10
	EnumItem HttpError.Unknown : 11
Enum HttpRequestType
	EnumItem HttpRequestType.Default : 0
	EnumItem HttpRequestType.MarketplaceService : 2
	EnumItem HttpRequestType.Players : 7
	EnumItem HttpRequestType.Chat : 15
	EnumItem HttpRequestType.Avatar : 16
Enum HumanoidDisplayDistanceType
	EnumItem HumanoidDisplayDistanceType.Viewer : 0
	EnumItem HumanoidDisplayDistanceType.Subject : 1
	EnumItem HumanoidDisplayDistanceType.None : 2
Enum HumanoidHealthDisplayType
	EnumItem HumanoidHealthDisplayType.DisplayWhenDamaged : 0
	EnumItem HumanoidHealthDisplayType.AlwaysOn : 1
	EnumItem HumanoidHealthDisplayType.AlwaysOff : 2
Enum HumanoidRigType
	EnumItem HumanoidRigType.R6 : 0
	EnumItem HumanoidRigType.R15 : 1
Enum HumanoidStateType
	EnumItem HumanoidStateType.FallingDown : 0
	EnumItem HumanoidStateType.Running : 8
	EnumItem HumanoidStateType.RunningNoPhysics : 10
	EnumItem HumanoidStateType.Climbing : 12
	EnumItem HumanoidStateType.StrafingNoPhysics : 11
	EnumItem HumanoidStateType.Ragdoll : 1
	EnumItem HumanoidStateType.GettingUp : 2
	EnumItem HumanoidStateType.Jumping : 3
	EnumItem HumanoidStateType.Landed : 7
	EnumItem HumanoidStateType.Flying : 6
	EnumItem HumanoidStateType.Freefall : 5
	EnumItem HumanoidStateType.Seated : 13
	EnumItem HumanoidStateType.PlatformStanding : 14
	EnumItem HumanoidStateType.Dead : 15
	EnumItem HumanoidStateType.Swimming : 4
	EnumItem HumanoidStateType.Physics : 16
	EnumItem HumanoidStateType.None : 18
Enum InOut
	EnumItem InOut.Edge : 0
	EnumItem InOut.Inset : 1
	EnumItem InOut.Center : 2
Enum InfoType
	EnumItem InfoType.Asset : 0
	EnumItem InfoType.Product : 1
	EnumItem InfoType.GamePass : 2
Enum InitialDockState
	EnumItem InitialDockState.Top : 0
	EnumItem InitialDockState.Bottom : 1
	EnumItem InitialDockState.Left : 2
	EnumItem InitialDockState.Right : 3
	EnumItem InitialDockState.Float : 4
Enum InputType
	EnumItem InputType.NoInput : 0
	EnumItem InputType.Constant : 12
	EnumItem InputType.Sin : 13
Enum JointCreationMode
	EnumItem JointCreationMode.All : 0
	EnumItem JointCreationMode.Surface : 1
	EnumItem JointCreationMode.None : 2
Enum JointType
	EnumItem JointType.None : 28
	EnumItem JointType.Rotate : 7
	EnumItem JointType.RotateP : 8
	EnumItem JointType.RotateV : 9
	EnumItem JointType.Glue : 10
	EnumItem JointType.Weld : 1
	EnumItem JointType.Snap : 3
Enum KeyCode
	EnumItem KeyCode.Unknown : 0
	EnumItem KeyCode.Backspace : 8
	EnumItem KeyCode.Tab : 9
	EnumItem KeyCode.Clear : 12
	EnumItem KeyCode.Return : 13
	EnumItem KeyCode.Pause : 19
	EnumItem KeyCode.Escape : 27
	EnumItem KeyCode.Space : 32
	EnumItem KeyCode.QuotedDouble : 34
	EnumItem KeyCode.Hash : 35
	EnumItem KeyCode.Dollar : 36
	EnumItem KeyCode.Percent : 37
	EnumItem KeyCode.Ampersand : 38
	EnumItem KeyCode.Quote : 39
	EnumItem KeyCode.LeftParenthesis : 40
	EnumItem KeyCode.RightParenthesis : 41
	EnumItem KeyCode.Asterisk : 42
	EnumItem KeyCode.Plus : 43
	EnumItem KeyCode.Comma : 44
	EnumItem KeyCode.Minus : 45
	EnumItem KeyCode.Period : 46
	EnumItem KeyCode.Slash : 47
	EnumItem KeyCode.Zero : 48
	EnumItem KeyCode.One : 49
	EnumItem KeyCode.Two : 50
	EnumItem KeyCode.Three : 51
	EnumItem KeyCode.Four : 52
	EnumItem KeyCode.Five : 53
	EnumItem KeyCode.Six : 54
	EnumItem KeyCode.Seven : 55
	EnumItem KeyCode.Eight : 56
	EnumItem KeyCode.Nine : 57
	EnumItem KeyCode.Colon : 58
	EnumItem KeyCode.Semicolon : 59
	EnumItem KeyCode.LessThan : 60
	EnumItem KeyCode.Equals : 61
	EnumItem KeyCode.GreaterThan : 62
	EnumItem KeyCode.Question : 63
	EnumItem KeyCode.At : 64
	EnumItem KeyCode.LeftBracket : 91
	EnumItem KeyCode.BackSlash : 92
	EnumItem KeyCode.RightBracket : 93
	EnumItem KeyCode.Caret : 94
	EnumItem KeyCode.Underscore : 95
	EnumItem KeyCode.Backquote : 96
	EnumItem KeyCode.A : 97
	EnumItem KeyCode.B : 98
	EnumItem KeyCode.C : 99
	EnumItem KeyCode.D : 100
	EnumItem KeyCode.E : 101
	EnumItem KeyCode.F : 102
	EnumItem KeyCode.G : 103
	EnumItem KeyCode.H : 104
	EnumItem KeyCode.I : 105
	EnumItem KeyCode.J : 106
	EnumItem KeyCode.K : 107
	EnumItem KeyCode.L : 108
	EnumItem KeyCode.M : 109
	EnumItem KeyCode.N : 110
	EnumItem KeyCode.O : 111
	EnumItem KeyCode.P : 112
	EnumItem KeyCode.Q : 113
	EnumItem KeyCode.R : 114
	EnumItem KeyCode.S : 115
	EnumItem KeyCode.T : 116
	EnumItem KeyCode.U : 117
	EnumItem KeyCode.V : 118
	EnumItem KeyCode.W : 119
	EnumItem KeyCode.X : 120
	EnumItem KeyCode.Y : 121
	EnumItem KeyCode.Z : 122
	EnumItem KeyCode.LeftCurly : 123
	EnumItem KeyCode.Pipe : 124
	EnumItem KeyCode.RightCurly : 125
	EnumItem KeyCode.Tilde : 126
	EnumItem KeyCode.Delete : 127
	EnumItem KeyCode.KeypadZero : 256
	EnumItem KeyCode.KeypadOne : 257
	EnumItem KeyCode.KeypadTwo : 258
	EnumItem KeyCode.KeypadThree : 259
	EnumItem KeyCode.KeypadFour : 260
	EnumItem KeyCode.KeypadFive : 261
	EnumItem KeyCode.KeypadSix : 262
	EnumItem KeyCode.KeypadSeven : 263
	EnumItem KeyCode.KeypadEight : 264
	EnumItem KeyCode.KeypadNine : 265
	EnumItem KeyCode.KeypadPeriod : 266
	EnumItem KeyCode.KeypadDivide : 267
	EnumItem KeyCode.KeypadMultiply : 268
	EnumItem KeyCode.KeypadMinus : 269
	EnumItem KeyCode.KeypadPlus : 270
	EnumItem KeyCode.KeypadEnter : 271
	EnumItem KeyCode.KeypadEquals : 272
	EnumItem KeyCode.Up : 273
	EnumItem KeyCode.Down : 274
	EnumItem KeyCode.Right : 275
	EnumItem KeyCode.Left : 276
	EnumItem KeyCode.Insert : 277
	EnumItem KeyCode.Home : 278
	EnumItem KeyCode.End : 279
	EnumItem KeyCode.PageUp : 280
	EnumItem KeyCode.PageDown : 281
	EnumItem KeyCode.LeftShift : 304
	EnumItem KeyCode.RightShift : 303
	EnumItem KeyCode.LeftMeta : 310
	EnumItem KeyCode.RightMeta : 309
	EnumItem KeyCode.LeftAlt : 308
	EnumItem KeyCode.RightAlt : 307
	EnumItem KeyCode.LeftControl : 306
	EnumItem KeyCode.RightControl : 305
	EnumItem KeyCode.CapsLock : 301
	EnumItem KeyCode.NumLock : 300
	EnumItem KeyCode.ScrollLock : 302
	EnumItem KeyCode.LeftSuper : 311
	EnumItem KeyCode.RightSuper : 312
	EnumItem KeyCode.Mode : 313
	EnumItem KeyCode.Compose : 314
	EnumItem KeyCode.Help : 315
	EnumItem KeyCode.Print : 316
	EnumItem KeyCode.SysReq : 317
	EnumItem KeyCode.Break : 318
	EnumItem KeyCode.Menu : 319
	EnumItem KeyCode.Power : 320
	EnumItem KeyCode.Euro : 321
	EnumItem KeyCode.Undo : 322
	EnumItem KeyCode.F1 : 282
	EnumItem KeyCode.F2 : 283
	EnumItem KeyCode.F3 : 284
	EnumItem KeyCode.F4 : 285
	EnumItem KeyCode.F5 : 286
	EnumItem KeyCode.F6 : 287
	EnumItem KeyCode.F7 : 288
	EnumItem KeyCode.F8 : 289
	EnumItem KeyCode.F9 : 290
	EnumItem KeyCode.F10 : 291
	EnumItem KeyCode.F11 : 292
	EnumItem KeyCode.F12 : 293
	EnumItem KeyCode.F13 : 294
	EnumItem KeyCode.F14 : 295
	EnumItem KeyCode.F15 : 296
	EnumItem KeyCode.World0 : 160
	EnumItem KeyCode.World1 : 161
	EnumItem KeyCode.World2 : 162
	EnumItem KeyCode.World3 : 163
	EnumItem KeyCode.World4 : 164
	EnumItem KeyCode.World5 : 165
	EnumItem KeyCode.World6 : 166
	EnumItem KeyCode.World7 : 167
	EnumItem KeyCode.World8 : 168
	EnumItem KeyCode.World9 : 169
	EnumItem KeyCode.World10 : 170
	EnumItem KeyCode.World11 : 171
	EnumItem KeyCode.World12 : 172
	EnumItem KeyCode.World13 : 173
	EnumItem KeyCode.World14 : 174
	EnumItem KeyCode.World15 : 175
	EnumItem KeyCode.World16 : 176
	EnumItem KeyCode.World17 : 177
	EnumItem KeyCode.World18 : 178
	EnumItem KeyCode.World19 : 179
	EnumItem KeyCode.World20 : 180
	EnumItem KeyCode.World21 : 181
	EnumItem KeyCode.World22 : 182
	EnumItem KeyCode.World23 : 183
	EnumItem KeyCode.World24 : 184
	EnumItem KeyCode.World25 : 185
	EnumItem KeyCode.World26 : 186
	EnumItem KeyCode.World27 : 187
	EnumItem KeyCode.World28 : 188
	EnumItem KeyCode.World29 : 189
	EnumItem KeyCode.World30 : 190
	EnumItem KeyCode.World31 : 191
	EnumItem KeyCode.World32 : 192
	EnumItem KeyCode.World33 : 193
	EnumItem KeyCode.World34 : 194
	EnumItem KeyCode.World35 : 195
	EnumItem KeyCode.World36 : 196
	EnumItem KeyCode.World37 : 197
	EnumItem KeyCode.World38 : 198
	EnumItem KeyCode.World39 : 199
	EnumItem KeyCode.World40 : 200
	EnumItem KeyCode.World41 : 201
	EnumItem KeyCode.World42 : 202
	EnumItem KeyCode.World43 : 203
	EnumItem KeyCode.World44 : 204
	EnumItem KeyCode.World45 : 205
	EnumItem KeyCode.World46 : 206
	EnumItem KeyCode.World47 : 207
	EnumItem KeyCode.World48 : 208
	EnumItem KeyCode.World49 : 209
	EnumItem KeyCode.World50 : 210
	EnumItem KeyCode.World51 : 211
	EnumItem KeyCode.World52 : 212
	EnumItem KeyCode.World53 : 213
	EnumItem KeyCode.World54 : 214
	EnumItem KeyCode.World55 : 215
	EnumItem KeyCode.World56 : 216
	EnumItem KeyCode.World57 : 217
	EnumItem KeyCode.World58 : 218
	EnumItem KeyCode.World59 : 219
	EnumItem KeyCode.World60 : 220
	EnumItem KeyCode.World61 : 221
	EnumItem KeyCode.World62 : 222
	EnumItem KeyCode.World63 : 223
	EnumItem KeyCode.World64 : 224
	EnumItem KeyCode.World65 : 225
	EnumItem KeyCode.World66 : 226
	EnumItem KeyCode.World67 : 227
	EnumItem KeyCode.World68 : 228
	EnumItem KeyCode.World69 : 229
	EnumItem KeyCode.World70 : 230
	EnumItem KeyCode.World71 : 231
	EnumItem KeyCode.World72 : 232
	EnumItem KeyCode.World73 : 233
	EnumItem KeyCode.World74 : 234
	EnumItem KeyCode.World75 : 235
	EnumItem KeyCode.World76 : 236
	EnumItem KeyCode.World77 : 237
	EnumItem KeyCode.World78 : 238
	EnumItem KeyCode.World79 : 239
	EnumItem KeyCode.World80 : 240
	EnumItem KeyCode.World81 : 241
	EnumItem KeyCode.World82 : 242
	EnumItem KeyCode.World83 : 243
	EnumItem KeyCode.World84 : 244
	EnumItem KeyCode.World85 : 245
	EnumItem KeyCode.World86 : 246
	EnumItem KeyCode.World87 : 247
	EnumItem KeyCode.World88 : 248
	EnumItem KeyCode.World89 : 249
	EnumItem KeyCode.World90 : 250
	EnumItem KeyCode.World91 : 251
	EnumItem KeyCode.World92 : 252
	EnumItem KeyCode.World93 : 253
	EnumItem KeyCode.World94 : 254
	EnumItem KeyCode.World95 : 255
	EnumItem KeyCode.ButtonX : 1000
	EnumItem KeyCode.ButtonY : 1001
	EnumItem KeyCode.ButtonA : 1002
	EnumItem KeyCode.ButtonB : 1003
	EnumItem KeyCode.ButtonR1 : 1004
	EnumItem KeyCode.ButtonL1 : 1005
	EnumItem KeyCode.ButtonR2 : 1006
	EnumItem KeyCode.ButtonL2 : 1007
	EnumItem KeyCode.ButtonR3 : 1008
	EnumItem KeyCode.ButtonL3 : 1009
	EnumItem KeyCode.ButtonStart : 1010
	EnumItem KeyCode.ButtonSelect : 1011
	EnumItem KeyCode.DPadLeft : 1012
	EnumItem KeyCode.DPadRight : 1013
	EnumItem KeyCode.DPadUp : 1014
	EnumItem KeyCode.DPadDown : 1015
	EnumItem KeyCode.Thumbstick1 : 1016
	EnumItem KeyCode.Thumbstick2 : 1017
Enum KeywordFilterType
	EnumItem KeywordFilterType.Include : 0
	EnumItem KeywordFilterType.Exclude : 1
Enum Language
	EnumItem Language.Default : 0
Enum LeftRight
	EnumItem LeftRight.Left : 0
	EnumItem LeftRight.Center : 1
	EnumItem LeftRight.Right : 2
Enum LevelOfDetailSetting
	EnumItem LevelOfDetailSetting.High : 2
	EnumItem LevelOfDetailSetting.Medium : 1
	EnumItem LevelOfDetailSetting.Low : 0
Enum Limb
	EnumItem Limb.Head : 0
	EnumItem Limb.Torso : 1
	EnumItem Limb.LeftArm : 2
	EnumItem Limb.RightArm : 3
	EnumItem Limb.LeftLeg : 4
	EnumItem Limb.RightLeg : 5
	EnumItem Limb.Unknown : 6
Enum ListenerType
	EnumItem ListenerType.Camera : 0
	EnumItem ListenerType.CFrame : 1
	EnumItem ListenerType.ObjectPosition : 2
	EnumItem ListenerType.ObjectCFrame : 3
Enum Material
	EnumItem Material.Plastic : 256
	EnumItem Material.Wood : 512
	EnumItem Material.Slate : 800
	EnumItem Material.Concrete : 816
	EnumItem Material.CorrodedMetal : 1040
	EnumItem Material.DiamondPlate : 1056
	EnumItem Material.Foil : 1072
	EnumItem Material.Grass : 1280
	EnumItem Material.Ice : 1536
	EnumItem Material.Marble : 784
	EnumItem Material.Granite : 832
	EnumItem Material.Brick : 848
	EnumItem Material.Pebble : 864
	EnumItem Material.Sand : 1296
	EnumItem Material.Fabric : 1312
	EnumItem Material.SmoothPlastic : 272
	EnumItem Material.Metal : 1088
	EnumItem Material.WoodPlanks : 528
	EnumItem Material.Cobblestone : 880
	EnumItem Material.Air : 1792 [notbrowsable]
	EnumItem Material.Water : 2048 [notbrowsable]
	EnumItem Material.Rock : 896 [notbrowsable]
	EnumItem Material.Glacier : 1552 [notbrowsable]
	EnumItem Material.Snow : 1328 [notbrowsable]
	EnumItem Material.Sandstone : 912 [notbrowsable]
	EnumItem Material.Mud : 1344 [notbrowsable]
	EnumItem Material.Basalt : 788 [notbrowsable]
	EnumItem Material.Ground : 1360 [notbrowsable]
	EnumItem Material.CrackedLava : 804 [notbrowsable]
	EnumItem Material.Neon : 288
	EnumItem Material.Glass : 1568
	EnumItem Material.Asphalt : 1376 [notbrowsable]
	EnumItem Material.LeafyGrass : 1284 [notbrowsable]
	EnumItem Material.Salt : 1392 [notbrowsable]
	EnumItem Material.Limestone : 820 [notbrowsable]
	EnumItem Material.Pavement : 836 [notbrowsable]
Enum MembershipType
	EnumItem MembershipType.None : 0
	EnumItem MembershipType.BuildersClub : 1
	EnumItem MembershipType.TurboBuildersClub : 2
	EnumItem MembershipType.OutrageousBuildersClub : 3
Enum MeshType
	EnumItem MeshType.Head : 0
	EnumItem MeshType.Torso : 1
	EnumItem MeshType.Wedge : 2
	EnumItem MeshType.Prism : 7 [deprecated]
	EnumItem MeshType.Pyramid : 8 [deprecated]
	EnumItem MeshType.ParallelRamp : 9 [deprecated]
	EnumItem MeshType.RightAngleRamp : 10 [deprecated]
	EnumItem MeshType.CornerWedge : 11 [deprecated]
	EnumItem MeshType.Brick : 6
	EnumItem MeshType.Sphere : 3
	EnumItem MeshType.Cylinder : 4
	EnumItem MeshType.FileMesh : 5
Enum MessageType
	EnumItem MessageType.MessageOutput : 0
	EnumItem MessageType.MessageInfo : 1
	EnumItem MessageType.MessageWarning : 2
	EnumItem MessageType.MessageError : 3
Enum MouseBehavior
	EnumItem MouseBehavior.Default : 0
	EnumItem MouseBehavior.LockCenter : 1
	EnumItem MouseBehavior.LockCurrentPosition : 2
Enum MoveState
	EnumItem MoveState.Stopped : 0
	EnumItem MoveState.Coasting : 1
	EnumItem MoveState.Pushing : 2
	EnumItem MoveState.Stopping : 3
	EnumItem MoveState.AirFree : 4
Enum NameOcclusion
	EnumItem NameOcclusion.OccludeAll : 2
	EnumItem NameOcclusion.EnemyOcclusion : 1
	EnumItem NameOcclusion.NoOcclusion : 0
Enum NetworkOwnership
	EnumItem NetworkOwnership.Automatic : 0
	EnumItem NetworkOwnership.Manual : 1
	EnumItem NetworkOwnership.OnContact : 2
Enum NormalId
	EnumItem NormalId.Top : 1
	EnumItem NormalId.Bottom : 4
	EnumItem NormalId.Back : 2
	EnumItem NormalId.Front : 5
	EnumItem NormalId.Right : 0
	EnumItem NormalId.Left : 3
Enum OverrideMouseIconBehavior
	EnumItem OverrideMouseIconBehavior.None : 0
	EnumItem OverrideMouseIconBehavior.ForceShow : 1
	EnumItem OverrideMouseIconBehavior.ForceHide : 2
Enum PacketPriority
	EnumItem PacketPriority.IMMEDIATE_PRIORITY : 0
	EnumItem PacketPriority.HIGH_PRIORITY : 1
	EnumItem PacketPriority.MEDIUM_PRIORITY : 2
	EnumItem PacketPriority.LOW_PRIORITY : 3
Enum PartType
	EnumItem PartType.Ball : 0
	EnumItem PartType.Block : 1
	EnumItem PartType.Cylinder : 2
Enum PathStatus
	EnumItem PathStatus.Success : 0
	EnumItem PathStatus.ClosestNoPath : 1 [deprecated]
	EnumItem PathStatus.ClosestOutOfRange : 2 [deprecated]
	EnumItem PathStatus.FailStartNotEmpty : 3 [deprecated]
	EnumItem PathStatus.FailFinishNotEmpty : 4 [deprecated]
	EnumItem PathStatus.NoPath : 5
Enum PathWaypointAction
	EnumItem PathWaypointAction.Walk : 0
	EnumItem PathWaypointAction.Jump : 1
Enum Platform
	EnumItem Platform.Windows : 0
	EnumItem Platform.OSX : 1
	EnumItem Platform.IOS : 2
	EnumItem Platform.Android : 3
	EnumItem Platform.XBoxOne : 4
	EnumItem Platform.PS4 : 5
	EnumItem Platform.PS3 : 6
	EnumItem Platform.XBox360 : 7
	EnumItem Platform.WiiU : 8
	EnumItem Platform.NX : 9
	EnumItem Platform.Ouya : 10
	EnumItem Platform.AndroidTV : 11
	EnumItem Platform.Chromecast : 12
	EnumItem Platform.Linux : 13
	EnumItem Platform.SteamOS : 14
	EnumItem Platform.WebOS : 15
	EnumItem Platform.DOS : 16
	EnumItem Platform.BeOS : 17
	EnumItem Platform.UWP : 18
	EnumItem Platform.None : 19
Enum PlaybackState
	EnumItem PlaybackState.Begin : 0
	EnumItem PlaybackState.Delayed : 1
	EnumItem PlaybackState.Playing : 2
	EnumItem PlaybackState.Paused : 3
	EnumItem PlaybackState.Completed : 4
	EnumItem PlaybackState.Cancelled : 5
Enum PlayerActions
	EnumItem PlayerActions.CharacterForward : 0
	EnumItem PlayerActions.CharacterBackward : 1
	EnumItem PlayerActions.CharacterLeft : 2
	EnumItem PlayerActions.CharacterRight : 3
	EnumItem PlayerActions.CharacterJump : 4
Enum PlayerChatType
	EnumItem PlayerChatType.All : 0
	EnumItem PlayerChatType.Team : 1
	EnumItem PlayerChatType.Whisper : 2
Enum PoseEasingDirection
	EnumItem PoseEasingDirection.Out : 1
	EnumItem PoseEasingDirection.InOut : 2
	EnumItem PoseEasingDirection.In : 0
Enum PoseEasingStyle
	EnumItem PoseEasingStyle.Linear : 0
	EnumItem PoseEasingStyle.Constant : 1
	EnumItem PoseEasingStyle.Elastic : 2
	EnumItem PoseEasingStyle.Cubic : 3
	EnumItem PoseEasingStyle.Bounce : 4
Enum PrivilegeType
	EnumItem PrivilegeType.Owner : 255
	EnumItem PrivilegeType.Admin : 240
	EnumItem PrivilegeType.Member : 128
	EnumItem PrivilegeType.Visitor : 10
	EnumItem PrivilegeType.Banned : 0
Enum ProductPurchaseDecision
	EnumItem ProductPurchaseDecision.NotProcessedYet : 0
	EnumItem ProductPurchaseDecision.PurchaseGranted : 1
Enum QualityLevel
	EnumItem QualityLevel.Automatic : 0
	EnumItem QualityLevel.Level01 : 1
	EnumItem QualityLevel.Level02 : 2
	EnumItem QualityLevel.Level03 : 3
	EnumItem QualityLevel.Level04 : 4
	EnumItem QualityLevel.Level05 : 5
	EnumItem QualityLevel.Level06 : 6
	EnumItem QualityLevel.Level07 : 7
	EnumItem QualityLevel.Level08 : 8
	EnumItem QualityLevel.Level09 : 9
	EnumItem QualityLevel.Level10 : 10
	EnumItem QualityLevel.Level11 : 11
	EnumItem QualityLevel.Level12 : 12
	EnumItem QualityLevel.Level13 : 13
	EnumItem QualityLevel.Level14 : 14
	EnumItem QualityLevel.Level15 : 15
	EnumItem QualityLevel.Level16 : 16
	EnumItem QualityLevel.Level17 : 17
	EnumItem QualityLevel.Level18 : 18
	EnumItem QualityLevel.Level19 : 19
	EnumItem QualityLevel.Level20 : 20
	EnumItem QualityLevel.Level21 : 21
Enum R15CollisionType
	EnumItem R15CollisionType.OuterBox : 0
	EnumItem R15CollisionType.InnerBox : 1
Enum RenderPriority
	EnumItem RenderPriority.First : 0
	EnumItem RenderPriority.Input : 100
	EnumItem RenderPriority.Camera : 200
	EnumItem RenderPriority.Character : 300
	EnumItem RenderPriority.Last : 2000
Enum RenderingTestComparisonMethod
	EnumItem RenderingTestComparisonMethod.psnr : 0
	EnumItem RenderingTestComparisonMethod.diff : 1
Enum ReverbType
	EnumItem ReverbType.NoReverb : 0
	EnumItem ReverbType.GenericReverb : 1
	EnumItem ReverbType.PaddedCell : 2
	EnumItem ReverbType.Room : 3
	EnumItem ReverbType.Bathroom : 4
	EnumItem ReverbType.LivingRoom : 5
	EnumItem ReverbType.StoneRoom : 6
	EnumItem ReverbType.Auditorium : 7
	EnumItem ReverbType.ConcertHall : 8
	EnumItem ReverbType.Cave : 9
	EnumItem ReverbType.Arena : 10
	EnumItem ReverbType.Hangar : 11
	EnumItem ReverbType.CarpettedHallway : 12
	EnumItem ReverbType.Hallway : 13
	EnumItem ReverbType.StoneCorridor : 14
	EnumItem ReverbType.Alley : 15
	EnumItem ReverbType.Forest : 16
	EnumItem ReverbType.City : 17
	EnumItem ReverbType.Mountains : 18
	EnumItem ReverbType.Quarry : 19
	EnumItem ReverbType.Plain : 20
	EnumItem ReverbType.ParkingLot : 21
	EnumItem ReverbType.SewerPipe : 22
	EnumItem ReverbType.UnderWater : 23
Enum RibbonTool
	EnumItem RibbonTool.Select : 0
	EnumItem RibbonTool.Scale : 1
	EnumItem RibbonTool.Rotate : 2
	EnumItem RibbonTool.Move : 3
	EnumItem RibbonTool.Transform : 4
	EnumItem RibbonTool.ColorPicker : 5
	EnumItem RibbonTool.MaterialPicker : 6
	EnumItem RibbonTool.Group : 7
	EnumItem RibbonTool.Ungroup : 8
	EnumItem RibbonTool.None : 9
Enum RollOffMode
	EnumItem RollOffMode.Inverse : 0
	EnumItem RollOffMode.Linear : 1
	EnumItem RollOffMode.InverseTapered : 3
	EnumItem RollOffMode.LinearSquare : 2
Enum RotationType
	EnumItem RotationType.MovementRelative : 0
	EnumItem RotationType.CameraRelative : 1
Enum RuntimeUndoBehavior
	EnumItem RuntimeUndoBehavior.Aggregate : 0
	EnumItem RuntimeUndoBehavior.Snapshot : 1
	EnumItem RuntimeUndoBehavior.Hybrid : 2
Enum SaveFilter
	EnumItem SaveFilter.SaveAll : 2
	EnumItem SaveFilter.SaveWorld : 0
	EnumItem SaveFilter.SaveGame : 1
Enum SavedQualitySetting
	EnumItem SavedQualitySetting.Automatic : 0
	EnumItem SavedQualitySetting.QualityLevel1 : 1
	EnumItem SavedQualitySetting.QualityLevel2 : 2
	EnumItem SavedQualitySetting.QualityLevel3 : 3
	EnumItem SavedQualitySetting.QualityLevel4 : 4
	EnumItem SavedQualitySetting.QualityLevel5 : 5
	EnumItem SavedQualitySetting.QualityLevel6 : 6
	EnumItem SavedQualitySetting.QualityLevel7 : 7
	EnumItem SavedQualitySetting.QualityLevel8 : 8
	EnumItem SavedQualitySetting.QualityLevel9 : 9
	EnumItem SavedQualitySetting.QualityLevel10 : 10
Enum ScaleType
	EnumItem ScaleType.Stretch : 0
	EnumItem ScaleType.Slice : 1
	EnumItem ScaleType.Tile : 2
	EnumItem ScaleType.Fit : 3
	EnumItem ScaleType.Crop : 4
Enum ScreenOrientation
	EnumItem ScreenOrientation.LandscapeLeft : 0
	EnumItem ScreenOrientation.LandscapeRight : 1
	EnumItem ScreenOrientation.LandscapeSensor : 2
	EnumItem ScreenOrientation.Portrait : 3
	EnumItem ScreenOrientation.Sensor : 4
Enum ScrollBarInset
	EnumItem ScrollBarInset.None : 0
	EnumItem ScrollBarInset.ScrollBar : 1
	EnumItem ScrollBarInset.Always : 2
Enum ScrollingDirection
	EnumItem ScrollingDirection.X : 1
	EnumItem ScrollingDirection.Y : 2
	EnumItem ScrollingDirection.XY : 4
Enum SizeConstraint
	EnumItem SizeConstraint.RelativeXY : 0
	EnumItem SizeConstraint.RelativeXX : 1
	EnumItem SizeConstraint.RelativeYY : 2
Enum SortOrder
	EnumItem SortOrder.LayoutOrder : 2
	EnumItem SortOrder.Name : 0
	EnumItem SortOrder.Custom : 1 [deprecated]
Enum SoundType
	EnumItem SoundType.NoSound : 0
	EnumItem SoundType.Boing : 1
	EnumItem SoundType.Bomb : 2
	EnumItem SoundType.Break : 3
	EnumItem SoundType.Click : 4
	EnumItem SoundType.Clock : 5
	EnumItem SoundType.Slingshot : 6
	EnumItem SoundType.Page : 7
	EnumItem SoundType.Ping : 8
	EnumItem SoundType.Snap : 9
	EnumItem SoundType.Splat : 10
	EnumItem SoundType.Step : 11
	EnumItem SoundType.StepOn : 12
	EnumItem SoundType.Swoosh : 13
	EnumItem SoundType.Victory : 14
Enum SpecialKey
	EnumItem SpecialKey.Insert : 0
	EnumItem SpecialKey.Home : 1
	EnumItem SpecialKey.End : 2
	EnumItem SpecialKey.PageUp : 3
	EnumItem SpecialKey.PageDown : 4
	EnumItem SpecialKey.ChatHotkey : 5
Enum StartCorner
	EnumItem StartCorner.TopLeft : 0
	EnumItem StartCorner.TopRight : 1
	EnumItem StartCorner.BottomLeft : 2
	EnumItem StartCorner.BottomRight : 3
Enum Status
	EnumItem Status.Poison : 0 [deprecated]
	EnumItem Status.Confusion : 1 [deprecated]
Enum Style
	EnumItem Style.AlternatingSupports : 0
	EnumItem Style.BridgeStyleSupports : 1
	EnumItem Style.NoSupports : 2
Enum SurfaceConstraint
	EnumItem SurfaceConstraint.None : 0
	EnumItem SurfaceConstraint.Hinge : 1
	EnumItem SurfaceConstraint.SteppingMotor : 2
	EnumItem SurfaceConstraint.Motor : 3
Enum SurfaceType
	EnumItem SurfaceType.Smooth : 0
	EnumItem SurfaceType.Glue : 1
	EnumItem SurfaceType.Weld : 2
	EnumItem SurfaceType.Studs : 3
	EnumItem SurfaceType.Inlet : 4
	EnumItem SurfaceType.Universal : 5
	EnumItem SurfaceType.Hinge : 6
	EnumItem SurfaceType.Motor : 7
	EnumItem SurfaceType.SteppingMotor : 8
	EnumItem SurfaceType.SmoothNoOutlines : 10
Enum SwipeDirection
	EnumItem SwipeDirection.Right : 0
	EnumItem SwipeDirection.Left : 1
	EnumItem SwipeDirection.Up : 2
	EnumItem SwipeDirection.Down : 3
	EnumItem SwipeDirection.None : 4
Enum TableMajorAxis
	EnumItem TableMajorAxis.RowMajor : 0
	EnumItem TableMajorAxis.ColumnMajor : 1
Enum Technology
	EnumItem Technology.Legacy : 0
	EnumItem Technology.Voxel : 1
Enum TeleportResult
	EnumItem TeleportResult.Success : 0
	EnumItem TeleportResult.Failure : 1
	EnumItem TeleportResult.GameNotFound : 2
	EnumItem TeleportResult.GameEnded : 3
	EnumItem TeleportResult.GameFull : 4
	EnumItem TeleportResult.Unauthorized : 5
	EnumItem TeleportResult.Flooded : 6
	EnumItem TeleportResult.IsTeleporting : 7
Enum TeleportState
	EnumItem TeleportState.RequestedFromServer : 0
	EnumItem TeleportState.Started : 1
	EnumItem TeleportState.WaitingForServer : 2
	EnumItem TeleportState.Failed : 3
	EnumItem TeleportState.InProgress : 4
Enum TeleportType
	EnumItem TeleportType.ToPlace : 0
	EnumItem TeleportType.ToInstance : 1
	EnumItem TeleportType.ToReservedServer : 2
Enum TextFilterContext
	EnumItem TextFilterContext.PublicChat : 1
	EnumItem TextFilterContext.PrivateChat : 2
Enum TextTruncate
	EnumItem TextTruncate.None : 0
	EnumItem TextTruncate.AtEnd : 1
Enum TextXAlignment
	EnumItem TextXAlignment.Left : 0
	EnumItem TextXAlignment.Center : 2
	EnumItem TextXAlignment.Right : 1
Enum TextYAlignment
	EnumItem TextYAlignment.Top : 0
	EnumItem TextYAlignment.Center : 1
	EnumItem TextYAlignment.Bottom : 2
Enum TextureMode
	EnumItem TextureMode.Stretch : 0
	EnumItem TextureMode.Wrap : 1
	EnumItem TextureMode.Static : 2
Enum TextureQueryType
	EnumItem TextureQueryType.NonHumanoid : 0
	EnumItem TextureQueryType.NonHumanoidOrphaned : 1
	EnumItem TextureQueryType.Humanoid : 2
	EnumItem TextureQueryType.HumanoidOrphaned : 3
Enum ThreadPoolConfig
	EnumItem ThreadPoolConfig.Auto : 0
	EnumItem ThreadPoolConfig.PerCore1 : 101
	EnumItem ThreadPoolConfig.PerCore2 : 102
	EnumItem ThreadPoolConfig.PerCore3 : 103
	EnumItem ThreadPoolConfig.PerCore4 : 104
	EnumItem ThreadPoolConfig.Threads1 : 1
	EnumItem ThreadPoolConfig.Threads2 : 2
	EnumItem ThreadPoolConfig.Threads3 : 3
	EnumItem ThreadPoolConfig.Threads4 : 4
	EnumItem ThreadPoolConfig.Threads8 : 8
	EnumItem ThreadPoolConfig.Threads16 : 16
Enum ThrottlingPriority
	EnumItem ThrottlingPriority.Extreme : 2
	EnumItem ThrottlingPriority.ElevatedOnServer : 1
	EnumItem ThrottlingPriority.Default : 0
Enum ThumbnailSize
	EnumItem ThumbnailSize.Size48x48 : 0
	EnumItem ThumbnailSize.Size180x180 : 1
	EnumItem ThumbnailSize.Size420x420 : 2
	EnumItem ThumbnailSize.Size60x60 : 3
	EnumItem ThumbnailSize.Size100x100 : 4
	EnumItem ThumbnailSize.Size150x150 : 5
	EnumItem ThumbnailSize.Size352x352 : 6
Enum ThumbnailType
	EnumItem ThumbnailType.HeadShot : 0
	EnumItem ThumbnailType.AvatarBust : 1
	EnumItem ThumbnailType.AvatarThumbnail : 2
Enum TickCountSampleMethod
	EnumItem TickCountSampleMethod.Fast : 0
	EnumItem TickCountSampleMethod.Benchmark : 1
	EnumItem TickCountSampleMethod.Precise : 2
Enum TopBottom
	EnumItem TopBottom.Top : 0
	EnumItem TopBottom.Center : 1
	EnumItem TopBottom.Bottom : 2
Enum TouchCameraMovementMode
	EnumItem TouchCameraMovementMode.Default : 0
	EnumItem TouchCameraMovementMode.Follow : 2
	EnumItem TouchCameraMovementMode.Classic : 1
	EnumItem TouchCameraMovementMode.Orbital : 3
Enum TouchMovementMode
	EnumItem TouchMovementMode.Default : 0
	EnumItem TouchMovementMode.Thumbstick : 1
	EnumItem TouchMovementMode.DPad : 2
	EnumItem TouchMovementMode.Thumbpad : 3
	EnumItem TouchMovementMode.ClickToMove : 4
	EnumItem TouchMovementMode.DynamicThumbstick : 5
Enum TweenStatus
	EnumItem TweenStatus.Canceled : 0
	EnumItem TweenStatus.Completed : 1
Enum UiMessageType
	EnumItem UiMessageType.UiMessageError : 0
	EnumItem UiMessageType.UiMessageInfo : 1
Enum UploadSetting
	EnumItem UploadSetting.Never : 0
	EnumItem UploadSetting.Ask : 1
	EnumItem UploadSetting.Always : 2
Enum UserCFrame
	EnumItem UserCFrame.Head : 0
	EnumItem UserCFrame.LeftHand : 1
	EnumItem UserCFrame.RightHand : 2
Enum UserInputState
	EnumItem UserInputState.Begin : 0
	EnumItem UserInputState.Change : 1
	EnumItem UserInputState.End : 2
	EnumItem UserInputState.Cancel : 3
	EnumItem UserInputState.None : 4
Enum UserInputType
	EnumItem UserInputType.MouseButton1 : 0
	EnumItem UserInputType.MouseButton2 : 1
	EnumItem UserInputType.MouseButton3 : 2
	EnumItem UserInputType.MouseWheel : 3
	EnumItem UserInputType.MouseMovement : 4
	EnumItem UserInputType.Touch : 7
	EnumItem UserInputType.Keyboard : 8
	EnumItem UserInputType.Focus : 9
	EnumItem UserInputType.Accelerometer : 10
	EnumItem UserInputType.Gyro : 11
	EnumItem UserInputType.Gamepad1 : 12
	EnumItem UserInputType.Gamepad2 : 13
	EnumItem UserInputType.Gamepad3 : 14
	EnumItem UserInputType.Gamepad4 : 15
	EnumItem UserInputType.Gamepad5 : 16
	EnumItem UserInputType.Gamepad6 : 17
	EnumItem UserInputType.Gamepad7 : 18
	EnumItem UserInputType.Gamepad8 : 19
	EnumItem UserInputType.TextInput : 20
	EnumItem UserInputType.None : 21
Enum VRTouchpad
	EnumItem VRTouchpad.Left : 0
	EnumItem VRTouchpad.Right : 1
Enum VRTouchpadMode
	EnumItem VRTouchpadMode.Touch : 0
	EnumItem VRTouchpadMode.VirtualThumbstick : 1
	EnumItem VRTouchpadMode.ABXY : 2
Enum VerticalAlignment
	EnumItem VerticalAlignment.Center : 0
	EnumItem VerticalAlignment.Top : 1
	EnumItem VerticalAlignment.Bottom : 2
Enum VerticalScrollBarPosition
	EnumItem VerticalScrollBarPosition.Left : 1
	EnumItem VerticalScrollBarPosition.Right : 0
Enum VibrationMotor
	EnumItem VibrationMotor.Large : 0
	EnumItem VibrationMotor.Small : 1
	EnumItem VibrationMotor.LeftTrigger : 2
	EnumItem VibrationMotor.RightTrigger : 3
	EnumItem VibrationMotor.LeftHand : 4
	EnumItem VibrationMotor.RightHand : 5
Enum VideoQualitySettings
	EnumItem VideoQualitySettings.LowResolution : 0
	EnumItem VideoQualitySettings.MediumResolution : 1
	EnumItem VideoQualitySettings.HighResolution : 2
Enum VirtualInputMode
	EnumItem VirtualInputMode.Recording : 1
	EnumItem VirtualInputMode.Playing : 2
	EnumItem VirtualInputMode.None : 0
Enum WaterDirection
	EnumItem WaterDirection.NegX : 0
	EnumItem WaterDirection.X : 1
	EnumItem WaterDirection.NegY : 2
	EnumItem WaterDirection.Y : 3
	EnumItem WaterDirection.NegZ : 4
	EnumItem WaterDirection.Z : 5
Enum WaterForce
	EnumItem WaterForce.None : 0
	EnumItem WaterForce.Small : 1
	EnumItem WaterForce.Medium : 2
	EnumItem WaterForce.Strong : 3
	EnumItem WaterForce.Max : 4
Enum ZIndexBehavior
	EnumItem ZIndexBehavior.Global : 0
	EnumItem ZIndexBehavior.Sibling : 1`;
let m;
var final = {}
var last = ""
while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    
    // The result can be accessed through the `m`-variable.
    var d = true
    m.forEach((match, groupIndex) => {
        values = match.split(" ")[2].split(".")
        if (final[values[0]] === undefined) {
            final[values[0]] = [values[1]]
        } else {
            if (last !== values[1]) {
                final[values[0]].push(values[1]);
            }
        }
        last = values[1]
    });
}

console.log(JSON.stringify(final).replaceAll(":","=").replaceAll("[","{").replaceAll("]","}"))

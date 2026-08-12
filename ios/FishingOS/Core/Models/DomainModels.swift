import Foundation

// Fishing OS v0.5 – native domain model scaffolding
// These types intentionally avoid persistence annotations for now.
// Persistence is added once the real Xcode target and migration requirements are validated.

public struct FishingDay: Identifiable, Codable, Hashable {
    public let id: UUID
    public var startedAt: Date
    public var endedAt: Date?
    public var originalTimeZoneIdentifier: String
    public var note: String?
    public var deletedAt: Date?

    public init(
        id: UUID = UUID(),
        startedAt: Date = Date(),
        endedAt: Date? = nil,
        originalTimeZoneIdentifier: String = TimeZone.current.identifier,
        note: String? = nil,
        deletedAt: Date? = nil
    ) {
        self.id = id
        self.startedAt = startedAt
        self.endedAt = endedAt
        self.originalTimeZoneIdentifier = originalTimeZoneIdentifier
        self.note = note
        self.deletedAt = deletedAt
    }
}

public struct WaterSession: Identifiable, Codable, Hashable {
    public let id: UUID
    public let fishingDayID: UUID
    public let waterID: UUID
    public var startedAt: Date
    public var endedAt: Date?
    public var originalTimeZoneIdentifier: String
    public var deletedAt: Date?

    public init(
        id: UUID = UUID(),
        fishingDayID: UUID,
        waterID: UUID,
        startedAt: Date = Date(),
        endedAt: Date? = nil,
        originalTimeZoneIdentifier: String = TimeZone.current.identifier,
        deletedAt: Date? = nil
    ) {
        self.id = id
        self.fishingDayID = fishingDayID
        self.waterID = waterID
        self.startedAt = startedAt
        self.endedAt = endedAt
        self.originalTimeZoneIdentifier = originalTimeZoneIdentifier
        self.deletedAt = deletedAt
    }
}

public struct SpotVisit: Identifiable, Codable, Hashable {
    public let id: UUID
    public let waterSessionID: UUID
    public let spotID: UUID
    public var startedAt: Date
    public var endedAt: Date?
    public var deletedAt: Date?

    public var duration: TimeInterval? {
        guard let endedAt else { return nil }
        return endedAt.timeIntervalSince(startedAt)
    }

    public init(
        id: UUID = UUID(),
        waterSessionID: UUID,
        spotID: UUID,
        startedAt: Date = Date(),
        endedAt: Date? = nil,
        deletedAt: Date? = nil
    ) {
        self.id = id
        self.waterSessionID = waterSessionID
        self.spotID = spotID
        self.startedAt = startedAt
        self.endedAt = endedAt
        self.deletedAt = deletedAt
    }
}

public enum FishingEventType: String, Codable, CaseIterable, Hashable {
    case catchEvent = "catch"
    case bite
    case lostInFight
    case follower
    case observation
    case lureLoss
}

public struct FishingEvent: Identifiable, Codable, Hashable {
    public let id: UUID
    public let waterSessionID: UUID
    public var spotVisitID: UUID?
    public var spotID: UUID?
    public var type: FishingEventType
    public var occurredAt: Date
    public var originalTimeZoneIdentifier: String
    public var latitude: Double?
    public var longitude: Double?
    public var weatherSnapshotID: UUID?
    public var note: String?
    public var deletedAt: Date?

    public init(
        id: UUID = UUID(),
        waterSessionID: UUID,
        spotVisitID: UUID? = nil,
        spotID: UUID? = nil,
        type: FishingEventType,
        occurredAt: Date = Date(),
        originalTimeZoneIdentifier: String = TimeZone.current.identifier,
        latitude: Double? = nil,
        longitude: Double? = nil,
        weatherSnapshotID: UUID? = nil,
        note: String? = nil,
        deletedAt: Date? = nil
    ) {
        self.id = id
        self.waterSessionID = waterSessionID
        self.spotVisitID = spotVisitID
        self.spotID = spotID
        self.type = type
        self.occurredAt = occurredAt
        self.originalTimeZoneIdentifier = originalTimeZoneIdentifier
        self.latitude = latitude
        self.longitude = longitude
        self.weatherSnapshotID = weatherSnapshotID
        self.note = note
        self.deletedAt = deletedAt
    }
}

public enum WeatherSnapshotSource: String, Codable, Hashable {
    case sessionStart
    case spotStart
    case manualRefresh
    case historicalLookup
}

public struct WeatherSnapshot: Identifiable, Codable, Hashable {
    public let id: UUID
    public var capturedAt: Date
    public var originalTimeZoneIdentifier: String
    public var latitude: Double?
    public var longitude: Double?
    public var temperatureCelsius: Double?
    public var pressureHPa: Double?
    public var windSpeedMetersPerSecond: Double?
    public var windDirectionDegrees: Double?
    public var cloudCoverPercent: Double?
    public var source: WeatherSnapshotSource

    public init(
        id: UUID = UUID(),
        capturedAt: Date = Date(),
        originalTimeZoneIdentifier: String = TimeZone.current.identifier,
        latitude: Double? = nil,
        longitude: Double? = nil,
        temperatureCelsius: Double? = nil,
        pressureHPa: Double? = nil,
        windSpeedMetersPerSecond: Double? = nil,
        windDirectionDegrees: Double? = nil,
        cloudCoverPercent: Double? = nil,
        source: WeatherSnapshotSource
    ) {
        self.id = id
        self.capturedAt = capturedAt
        self.originalTimeZoneIdentifier = originalTimeZoneIdentifier
        self.latitude = latitude
        self.longitude = longitude
        self.temperatureCelsius = temperatureCelsius
        self.pressureHPa = pressureHPa
        self.windSpeedMetersPerSecond = windSpeedMetersPerSecond
        self.windDirectionDegrees = windDirectionDegrees
        self.cloudCoverPercent = cloudCoverPercent
        self.source = source
    }
}

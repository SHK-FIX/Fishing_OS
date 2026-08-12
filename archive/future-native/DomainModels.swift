import Foundation

// Fishing OS – deferred native domain model scaffold
// Archived on 13.08.2026 after the product decision to keep v0.5 PWA-first.
// This file is NOT part of the active v0.5 implementation.

public struct FishingDay: Identifiable, Codable, Hashable {
    public let id: UUID
    public var startedAt: Date
    public var endedAt: Date?
    public var originalTimeZoneIdentifier: String
    public var note: String?
    public var deletedAt: Date?

    public init(id: UUID = UUID(), startedAt: Date = Date(), endedAt: Date? = nil, originalTimeZoneIdentifier: String = TimeZone.current.identifier, note: String? = nil, deletedAt: Date? = nil) {
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

    public init(id: UUID = UUID(), fishingDayID: UUID, waterID: UUID, startedAt: Date = Date(), endedAt: Date? = nil, originalTimeZoneIdentifier: String = TimeZone.current.identifier, deletedAt: Date? = nil) {
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
}

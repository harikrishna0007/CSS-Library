import React, { useState } from "react";

export default {
    title: "Components/Form V2",
    parameters: { layout: "padded" },
};

const InfoAlert = ({ text }) => (
    <div className="wmata-alert wmata-alert-info">
        <div className="wmata-alert-content">{text}</div>
    </div>
);

export const Default = () => (
    <div style={{ maxWidth: 980 }}>
        <div className="wmata-form-card">
            <div className="wmata-form-card__header">
                <h2 className="wmata-form-card__title">Modify/Delete Tardy & Attendance Records</h2>
                <p className="wmata-form-card__subtitle">Request approval to modify/delete records</p>
            </div>

            <div className="wmata-form-card__body">
                <div className="wmata-form-grid">
                    <div className="wmata-field">
                        <label className="wmata-label">Employees to View:</label>
                        <select className="wmata-select" defaultValue="direct">
                            <option value="direct">My Direct Reports</option>
                            <option value="all">All Employees</option>
                        </select>
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Submitter:</label>
                        <input className="wmata-input" type="text" value="Hari Edvalapati" readOnly />
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Employee:</label>
                        <select className="wmata-select" defaultValue="">
                            <option value="">-- Select Employee --</option>
                            <option value="1">Employee A</option>
                            <option value="2">Employee B</option>
                        </select>
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Choose Record Type:</label>
                        <select className="wmata-select" defaultValue="">
                            <option value="">-- Choose Record Type --</option>
                            <option value="tardy">Tardy</option>
                            <option value="attendance">Attendance</option>
                        </select>
                    </div>

                    <InfoAlert text="Please choose a record type to load records..." />

                    <div className="wmata-form-actions">
                        <button className="wmata-btn wmata-btn-secondary" type="button">
                            Cancel
                        </button>
                        <button className="wmata-btn wmata-btn-primary" type="button" disabled>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const TwoColumnLayout = () => (
    <div style={{ maxWidth: 980 }}>
        <div className="wmata-form-card">
            <div className="wmata-form-card__header">
                <h2 className="wmata-form-card__title">Two Column Form</h2>
                <p className="wmata-form-card__subtitle">Use on large screens to reduce scrolling.</p>
            </div>

            <div className="wmata-form-card__body">
                <div className="wmata-form-grid wmata-form-grid--two-col">
                    <div className="wmata-field">
                        <label className="wmata-label">First name</label>
                        <input className="wmata-input" placeholder="Enter first name" />
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Last name</label>
                        <input className="wmata-input" placeholder="Enter last name" />
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Work location</label>
                        <select className="wmata-select" defaultValue="hq">
                            <option value="hq">HQ</option>
                            <option value="yard">Rail Yard</option>
                            <option value="station">Station</option>
                        </select>
                    </div>

                    <div className="wmata-field">
                        <label className="wmata-label">Role</label>
                        <select className="wmata-select" defaultValue="supervisor">
                            <option value="supervisor">Supervisor</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="wmata-field" style={{ gridColumn: "1 / -1" }}>
                        <label className="wmata-label">Comments</label>
                        <textarea className="wmata-textarea" rows={4} placeholder="Add notes..." />
                        <div className="wmata-help">Use this field for additional context (optional).</div>
                    </div>

                    <div className="wmata-form-actions" style={{ gridColumn: "1 / -1" }}>
                        <button className="wmata-btn wmata-btn-secondary" type="button">
                            Cancel
                        </button>
                        <button className="wmata-btn wmata-btn-primary" type="button">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const ValidationStates = () => {
    const [type, setType] = useState("");

    return (
        <div style={{ maxWidth: 980 }}>
            <div className="wmata-form-card">
                <div className="wmata-form-card__header">
                    <h2 className="wmata-form-card__title">Validation Example</h2>
                    <p className="wmata-form-card__subtitle">Show guidance messages and disabled actions.</p>
                </div>

                <div className="wmata-form-card__body">
                    <div className="wmata-form-grid">
                        <div className="wmata-field">
                            <label className="wmata-label">Choose Record Type:</label>
                            <select className="wmata-select" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="">-- Choose Record Type --</option>
                                <option value="tardy">Tardy</option>
                                <option value="attendance">Attendance</option>
                            </select>
                            <div className="wmata-help">Required field</div>
                        </div>

                        {!type ? (
                            <InfoAlert text="Please choose a record type to load records..." />
                        ) : (
                            <div className="wmata-alert wmata-alert-success">
                                <div className="wmata-alert-content">Records loaded successfully.</div>
                            </div>
                        )}

                        <div className="wmata-form-actions">
                            <button className="wmata-btn wmata-btn-secondary" type="button">
                                Cancel
                            </button>
                            <button className="wmata-btn wmata-btn-primary" type="button" disabled={!type}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

# app/main.py
import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

# Placeholder imports for ML + SHAP integration
# from src.helpers import load_model, predict
# from src.visuals import shap_summary_plot, plot_feature_importance

st.set_page_config(page_title="Exoplanet Explorer", layout="wide")

# Sidebar navigation
st.sidebar.title("🚀 Exoplanet Explorer")
page = st.sidebar.radio(
    "Navigate", 
    ["Dashboard", "Light-Curve Viewer", "Prediction", "Batch Processing", "Admin"]
)

# ---- DASHBOARD ----
if page == "Dashboard":
    st.title("🌌 Dashboard")
    st.write("Select mission and explore dataset summary.")
    
    mission = st.selectbox("Choose Mission/Dataset", ["Kepler", "K2", "TESS", "Exoplanet DB"])
    
    # Mock stats
    stats = {
        "Total Stars Observed": 150000,
        "Confirmed Exoplanets": 2800,
        "Candidates": 1200,
        "False Positives": 340,
    }
    
    cols = st.columns(len(stats))
    for i, (k, v) in enumerate(stats.items()):
        cols[i].metric(label=k, value=v)

# ---- LIGHT CURVE VIEWER ----
elif page == "Light-Curve Viewer":
    st.title("🔭 Light-Curve Viewer")
    st.write("Upload light curve data to visualize raw/detrended curves and transit fits.")
    
    uploaded_file = st.file_uploader("Upload Light Curve CSV", type="csv")
    
    if uploaded_file:
        df = pd.read_csv(uploaded_file)
        # Expecting columns: time, flux, flux_detrended, model_fit
        
        fig = px.line(df, x="time", y="flux", title="Raw Light Curve")
        st.plotly_chart(fig, use_container_width=True)
        
        if "flux_detrended" in df.columns:
            fig2 = px.line(df, x="time", y="flux_detrended", title="Detrended Light Curve")
            st.plotly_chart(fig2, use_container_width=True)
        
        if "model_fit" in df.columns:
            fig3 = px.line(df, x="time", y="df['model_fit']", title="Model Transit Fit")
            st.plotly_chart(fig3, use_container_width=True)

# ---- PREDICTION ----
elif page == "Prediction":
    st.title("🤖 Exoplanet Prediction")
    st.write("Enter parameters to classify a candidate.")
    
    with st.form("prediction_form"):
        orbital_period = st.number_input("Orbital Period (days)", value=10.0)
        radius = st.number_input("Planet Radius (Earth radii)", value=1.0)
        duration = st.number_input("Transit Duration (hours)", value=5.0)
        depth = st.number_input("Transit Depth (ppm)", value=200.0)
        
        submitted = st.form_submit_button("Predict")
    
    if submitted:
        # Placeholder for model integration
        # prediction, prob = predict({...})
        prediction = "Exoplanet Candidate"
        prob = 0.87
        
        st.success(f"Prediction: {prediction} (Confidence: {prob:.2f})")
        
        st.subheader("SHAP Explanation (Feature Contributions)")
        st.info("Here would be the SHAP summary plot.")
        # shap_summary_plot(model, input_vector)

# ---- BATCH PROCESSING ----
elif page == "Batch Processing":
    st.title("📂 Batch Processing")
    st.write("Upload a CSV of candidates for bulk prediction.")
    
    batch_file = st.file_uploader("Upload CSV", type="csv")
    
    if batch_file:
        batch_df = pd.read_csv(batch_file)
        st.write("Preview of uploaded data:", batch_df.head())
        
        # Placeholder predictions
        batch_df["Prediction"] = np.random.choice(
            ["Confirmed", "Candidate", "False Positive"], size=len(batch_df)
        )
        st.download_button(
            "Download Results CSV",
            batch_df.to_csv(index=False).encode("utf-8"),
            "predictions.csv",
            "text/csv"
        )
        st.write("Results with predictions:", batch_df)

# ---- ADMIN ----
elif page == "Admin":
    st.title("⚙️ Admin Panel")
    st.write("Manage retraining and user-contributed labels (optional).")
    
    new_labels = st.file_uploader("Upload labeled dataset for retraining", type="csv")
    if new_labels:
        st.success("Dataset uploaded. Retraining queue updated (mock).")